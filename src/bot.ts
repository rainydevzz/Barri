import { Client, Message, BotActivity, Guild } from 'oceanic.js';
import { ExtInteraction } from './types/extinteraction';
import { PrismaClient } from '@prisma/client';
import { DBOPtions } from './types/dboptions';
import { IgnoreOptions } from './types/ignoreoptions';
import commands from './commands';
import client from './prisma/client';
import path from 'path';
import fs from 'fs';

const eventPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventPath);

export class BotClient extends Client {
    spamCache: Map<String, Array<any>> = new Map();
    dbCache: Map<String, DBOPtions> = new Map();
    ignoreCache: Map<String, IgnoreOptions> = new Map();
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

    async cycleStatus(activities: BotActivity[]) {
        let i = 0;
        while(true) {
            await this.editStatus('online', [activities[i % activities.length]]);
            i++;
            await new Promise((res) => {setTimeout(res, 20000)});
        }
    }

    async altWarns(interaction: ExtInteraction | Message, num: number, userID: string): Promise<void | number> {
        const res = await this.db.warns.findMany({
            where: {AND: {
                guild: interaction.guildID,
                user: userID
            }}
        });
        if(res[0]) {
            let sum = num + res[0].count;
            if(sum < 0) {
                return 1;
            }
            await this.db.warns.updateMany({where: {AND: {
                    guild: interaction.guildID,
                    user: userID
                }},
                data: {
                    count: res[0].count + num
                }
            });
        } else {
            let sum = 0 + num;
            if(sum < 0) {
                return 1;
            }
            await this.db.warns.create({
                data: {
                    guild: interaction.guildID,
                    user: userID,
                    id: this.genString(),
                    count: 0 + num
                }
            });
        }
    }

    async checkIgnore(interaction: Message): Promise<boolean> {
        let res = this.ignoreCache.get(interaction.guildID);
        if(!res || (res && new Date().getTime() - res.timestamp > 120000)) {
            const dbres = await this.db.ignoretable.findMany({
                where: { guild: interaction.guildID }
            });
            if(!dbres) return false;
            let ignoreArr: Array<string> = [];
            for(const r of dbres) {
                ignoreArr.push(r.id);
            }
            this.ignoreCache.set(interaction.guildID, {timestamp: new Date().getTime(), ids: ignoreArr});
            res = this.ignoreCache.get(interaction.guildID);
        }
        const roleCheck = res.ids.some(r => interaction.member.roles.includes(r));
        if(
            res.ids.includes(interaction.author.id) ||
            res.ids.includes(interaction.channelID) ||
            roleCheck
        ) { return true; } else { return false; }
    }

    async checkWarns(interaction: ExtInteraction | Message, userID: string): Promise<number> {
        const res = await this.db.warns.findMany({
            where: {AND: {
                guild: interaction.guildID,
                user: userID
            }
        }});
        if(res[0]) {
            return res[0].count;
        } else {
            await this.db.warns.create({
                data: {
                    guild: interaction.guildID,
                    user: userID,
                    id: this.genString(),
                    count: 0
                }
            });
            return 0;
        }
    }

    async checkPunish(interaction: Message, userID: string): Promise<void> {
        const res = await this.db.warnsys.findFirst({where: {guild: interaction.guildID}});
        const warnres = await this.checkWarns(interaction, userID);
        const user = this.guilds.find(g => g.id == interaction.guildID).members.find(u => u.id == userID);
        const dur = new Date(new Date().getTime() + (res.duration)) || null;
        try {
            if(res.mutelimit) {
                if(res.mutelimit == warnres) {
                    await user.edit({communicationDisabledUntil: dur.toISOString()});
                    let embed = {
                        title: `${user.tag} has been muted until ${dur}`,
                        color: 0x000088
                    }
                    await interaction.channel.createMessage({embeds: [embed]});
                    return;
                }
            }
            if(res.kicklimit) {
                if(res.kicklimit == warnres) {
                    await user.kick("Too many infractions");
                    let embed = {
                        title: `${user.tag} has been kicked due to Automod.`,
                        color: 0x000088
                    }
                    await interaction.channel.createMessage({embeds: [embed]});
                    return;
                }
            }
            if(res.banlimit) {
                if(res.banlimit == warnres) {
                    await user.ban({reason: "Too many infractions"});
                    let embed = {
                        title: `${user.tag} has been banned due to Automod.`,
                        color: 0x000088
                    }
                    await interaction.channel.createMessage({embeds: [embed]});
                    return;
                }
            }
        } catch(e) {
            await interaction.channel.createMessage({content: "Failed to complete action, likely due to missing permissions."});
            return;
        }
        await interaction.channel.createMessage({content: `${interaction.author.mention} has been warned automatically.`});
    }

    async checkSpam(msg: Message): Promise<boolean> {
        const check = await this.checkIgnore(msg);
        if(!check) return false;
        let res = this.dbCache.get(msg.guildID);
        if(!res || (res && new Date().getTime() - res.timestamp >= 120000)) { // checks if it's been over 2 minutes since last cache refresh or cache record doesn't exist
            let dbres = await this.db.antispam.findFirst({where: {guild: msg.guildID}});
            let onspamres = (await this.db.warnsys.findFirst({where: {guild: msg.guildID}}));
            let onspam: boolean;
            if(onspamres) { onspam = onspamres.onspam } else { onspam = false };
            if(!dbres) return false;
            this.dbCache.set(msg.guildID, {interval: dbres.interval, msgcount: dbres.messagecount, timestamp: new Date().getTime(), onspam: onspam, setting: dbres.setting}); // updates cache
            res = this.dbCache.get(msg.guildID);
        }
        if(!res.setting) { return false; }
        let uid = msg.author.id;
        let sres = this.spamCache.get(msg.guildID);
        if(!sres) { this.spamCache.set(msg.guildID, [{[uid]: [{timestamp: msg.timestamp.getTime()}]}]); return false; } // sets user record in guild map value
        let ures = sres.find(u => u.hasOwnProperty(uid));
        if(!ures) {
            sres.push({[uid]: [{timestamp: msg.timestamp.getTime()}]}); // adds message record to user array
            return false;
        }
        ures = ures[uid];
        ures.push({timestamp: msg.timestamp.getTime()});
        if(ures.length >= res.msgcount) { // if threshold is reached for message count
            let dif = ures[res.msgcount - 1].timestamp - ures[0].timestamp;
            sres.find(u => u.hasOwnProperty(uid))[uid] = [];
            if(dif < res.interval) {
                return true; // antispam rule broken
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    isOwner(id: string): boolean {
        const owners = process.env.OWNERS.split(' ');
        return owners.includes(id);
    }

    genString(): string {
        const r = Math.random().toString(36).substring(2, 18);
        return r;
    }

    getCommandsLength(): number {
        let total = commands.length;
        for(const c of commands) {
            if(c.options && c.options[0].type == 1) {
                total += c.options.length;
                total--;
            }
        }
        return total;
    }

    getMemberLength() {
        let i: any = 0;
        for(const gu of this.guilds) {
            if(gu instanceof Guild) {
                i += gu.memberCount;
            } else if(gu instanceof String){
                let s = gu.toString();
                const guild = this.guilds.find(g => g.id == s);
                i += guild.memberCount;
            }
        }
        return i;
    }

    getOptions(options: Array<any>): Map<string, any> {
        // options will typically be interaction.data.options.raw
        if(!options[0]) { return new Map() }; // no options
        let optionMap: Map<string, string> = new Map();
        if(options[0].type == 1) { // for subcommands
            for(const o of options[0].options) {
                optionMap.set(o.name, o.value);
            }
        } else { // for base commands
            for (const o of options) {
                optionMap.set(o.name, o.value);
            }
        }
        return optionMap;
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