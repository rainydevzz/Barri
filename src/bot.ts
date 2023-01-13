import { Client, Message } from 'oceanic.js';
import { PrismaClient } from '@prisma/client';
import { DBOPtions } from './types/dboptions';
import { owners } from "./cfg.json";
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
        console.log(`${this.getCommandsLength()} commands synced!`);
    }

    async initialize(): Promise<void> {
        try {
            console.log(`${this.user.tag} is up! Initializing...`);
            await this.syncCommands();
            await this.db.$connect();
            console.log("Setup complete!");
        } catch (e) {
            console.error("Uh oh, something went wrong. Error:", e);
        }
    }

    async checkSpam(msg: Message): Promise<boolean> {
        let res = this.dbCache.get(msg.guildID);
        if(!res || (res && new Date().getTime() - res.timestamp >= 90000)) {
            let dbres = await this.db.antispam.findFirst({where: {guild: msg.guildID}});
            if(!dbres) return false;
            this.dbCache.set(msg.guildID, {interval: dbres.interval, msgcount: dbres.messagecount, timestamp: new Date().getTime()});
            res = this.dbCache.get(msg.guildID);
        }
        let uid = msg.author.id;
        let sres = this.spamCache.get(msg.guildID);
        if(!sres) { this.spamCache.set(msg.guildID, [{[uid]: [{timestamp: msg.timestamp.getTime()}]}]); return false; }
        let ures = sres.find(u => u.hasOwnProperty(uid));
        if(!ures) {
            sres.push({[uid]: [{timestamp: msg.timestamp.getTime()}]});
            return false;
        }
        ures = ures[uid];
        ures.push({timestamp: msg.timestamp.getTime()});
        if(ures.length >= res.msgcount) {
            let dif = ures[res.msgcount - 1].timestamp - ures[0].timestamp;
            sres.find(u => u.hasOwnProperty(uid))[uid] = [];
            if(dif < res.interval) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    isOwner(id: string): boolean {
        return owners.includes(id);
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