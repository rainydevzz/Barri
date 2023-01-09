import { CommandInteraction, ApplicationCommandOptionTypes } from "oceanic.js";
import commands from "../commands";

export async function execute(interaction: CommandInteraction): Promise<void> {
    if(!interaction.options[0]) {
        let descStr = "";
        for(const c of commands) {
            descStr += `**${c.name}** - ${c.description}`;
        }
        let embed = {
            title: 'Help Commands',
            description: descStr,
            color: 0x072a6c
        }

        await interaction.createMessage({embeds: [embed]});
        return;
    } else {
        const opt = interaction.options[0];
        // todo: finish help cmd
        if(opt.type == ApplicationCommandOptionTypes.SUB_COMMAND) {
            let descStr = "";
            for(const o of opt.options) {
                descStr += `**${o.name}** - ${o.description}`;
            }
            let embed = {
                title: 'Help Commands',
                description: descStr,
                color: 0x072a6c
            }
    
            await interaction.createMessage({embeds: [embed]});
            return;
        } else {

        }
    }
}