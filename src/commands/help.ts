import { ApplicationCommandOptionTypes } from "oceanic.js";
import commands from "../commands";
import { ExtInteraction } from "../types/extinteraction";

export async function execute(interaction: ExtInteraction): Promise<void> {
    let cmd: string = interaction.options.get('command');
    if(cmd) {
        if(cmd.includes(' ')) {
            let args = cmd.split(' ');
            let cmdres = commands.find(c => c.name == args[0].toLowerCase());
            if(!cmdres) {
                await interaction.createMessage({content: `command ${args[0]} not found!`});
                return;
            }
            if(cmdres.options[0] && cmdres.options[0].type != 1) {
                await interaction.createMessage({content: `command ${args[0]} has no subcommands!`});
                return;
            }
            let subcmd = cmdres.options.filter(c => c.name == args[1].toLowerCase())[0];
            if(!subcmd) {
                await interaction.createMessage({content: `subcommand ${args[1]} not found!`});
                return;
            }
            let descStr = "";
            if(!subcmd.options) {
                descStr += "No Options";
            } else {
                for(const o of subcmd.options) {
                    descStr += `**${o.name}** - ${o.description}\n`;
                }
            }
            let embed = {
                title: `Command Info For ${cmd}`,
                description: descStr,
                color: 0x000099
            }
            await interaction.createMessage({embeds: [embed]});
        } else {
            let cmdres = commands.find(c => c.name == cmd.toLowerCase());
            if(!cmdres) {
                await interaction.createMessage({content: `command ${cmd} not found!`});
                return;
            }
            let descStr = "";
            if(!cmdres.options) {
                descStr += "No Options";
            } else {
                for(const o of cmdres.options) {
                    descStr += `**${o.name}** - ${o.description}\n`;
                }
            }
            let embed = {
                title: `Command Info For ${cmd}`,
                description: descStr,
                color: 0x000099
            }
            await interaction.createMessage({embeds: [embed]});
        }
    } else {
        let descStr = "";
        for(const c of commands) {
            descStr += `**${c.name}** - ${c.description}\n`;
        }
        let embed = {
            title: `Command Info`,
            description: descStr,
            color: 0x000099
        }
        await interaction.createMessage({embeds: [embed]});
    }
}