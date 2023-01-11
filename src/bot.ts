import { Client } from 'oceanic.js';
import { PrismaClient } from '@prisma/client';
import { DBOPtions } from './types/dboptions';
import commands from './commands';
import client from './prisma/client';
import path from 'path';
import fs from 'fs';

const eventPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventPath).filter(f => f.endsWith('.ts'));

export class BotClient extends Client {
    spamCache: Map<String, Array<any>> = new Map();
    dbCache: Map<String, DBOPtions> = new Map();
    db: PrismaClient = client;

    async syncCommands(): Promise<void> {
        await this.application.bulkEditGlobalCommands(commands);
        console.log(`${this.getCommandsLength()} commands synced!`)
    }

    async initialize(): Promise<void> {
        console.log(`${this.user.tag} is up! Initializing...`);
        await this.syncCommands();
        await this.db.$connect();
        console.log("Setup complete!");
    }

    checkSpam(guildID, msg): boolean {
        let res = this.dbCache.get(guildID);
        if(!res) {
            let dbres = await this.db.findFirst({where: {guild: guildID}});
            if(!dbres[0]) return false;
            this.dbCache.set(guildID, {interval: dbres.interval, msgcount: dbres.messagecount});
            res = this.dbCache.get(guildID);
        }
        let uid = msg.author.id;
        let sres = this.spamCache.get(guildID);
        if(!sres) { this.spamCache.set(guildID, [{uid: [{timestamp: msg.timestamp.getTime()}]}]); return false; }
        let ures = this.spamCache.get(guildID).find(uid);
        if(!ures) {
            this.spamCache.set(guildID, [{uid: [{timestamp: msg.timestamp.getTime()}]}]);
            return false;
        }
        if(ures.length >= res.messagecount) {
            let dif = ures.uid[0].timestamp.getTime() - ures.uid[res.msgcount].getTime();
            if(dif < res.interval) {
                return true;
            } else {
                return false;
            }
        }
    }

    getCommandsLength(): number {
        let total = 0;
        for(const co of commands) {
            total += 1;
            if(co.options) {
                for(const op of co.options) {
                    if(op.type == 1) {
                        total += 1;
                    }
                }
            }
        }
        return total;
    }

    getOptions(options: Array<any>): Array<any> {
        // options will typically be interaction.data.options.raw
        if(!options[0]) { return [] }; // no options
        let optionArr = [];
        if(options[0].type == 1) { // for subcommands
            for(const o of options[0].options) {
                optionArr.push(o.value);
            }
        } else { // for base commands
            for (const o of options) {
                optionArr.push(o.value);
            }
        }
        return optionArr;
    }

    startEventHandler() {   
        try {
            for (const f of eventFiles) {
                const fp = path.join(eventPath, f);
                const event = require(fp);
                // triggers 'once' events
                if(event.once) {
                    this.once(event.name, (...args: any[]) => event.execute(this, ...args));
                // triggers 'on' events
                } else {
                    this.on(event.name, (...args: any[]) => event.execute(this, ...args));
                }
            }
        } catch (e) {
            console.error(e);
        }
    }
}