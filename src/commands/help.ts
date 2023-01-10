import { ApplicationCommandOptionTypes } from "oceanic.js";
import commands from "../commands";
import { ExtInteraction } from "../types/extinteraction";

export async function execute(interaction: ExtInteraction): Promise<void> {
    if(!interaction.options[0]) {
        let descStr = "";
        for(const c of commands) {
            descStr += `**${c.name}** - ${c.description}\n`;
        }
        let embed = {
            title: 'Help Commands',
            description: descStr,
            color: 0x072a6c
        }

        await interaction.createMessage({embeds: [embed]});
        return;
    } else {
        let opt = interaction.options[0];
        let opt2 = commands.find(c => c.name == opt);
        if (!opt2) {
            await interaction.createMessage({content: "no command found by that name!"});
            return;
        }
        if(opt.type == ApplicationCommandOptionTypes.SUB_COMMAND) {
            let descStr = "";
            for(const o of opt2.options) {
                descStr += `**${o.name}** - ${o.description}\n`;
            }
            let embed = {
                title: 'Help Commands',
                description: descStr,
                color: 0x072a6c
            }
    
            await interaction.createMessage({embeds: [embed]});
            return;
        } else {
            let descStr = "";
            if(opt2.options !== undefined) {
                for(const c of opt2.options) {
                    descStr += `**${c.name}** - ${c.description}`;
                }
            } else {
                descStr = "No Options";
            }
            let embed = {
                title: `Help for ${opt2.name}`,
                description: descStr,
                color: 0x072a6c
            }
    
            await interaction.createMessage({embeds: [embed]});
            return;
        }
    }
}