import { ExtInteraction } from '../../../types/extinteraction';
import { Guild } from 'oceanic.js';

export async function execute(interaction: ExtInteraction) {
    if(!interaction.client.isOwner(interaction.user.id)) {
        await interaction.createMessage({content: "This command is for bot owners only.", flags: 64});
        return;
    }

    let gstr = "";
    for(const g of interaction.client.guilds) {
        if(g instanceof Guild) {
            gstr += `${g.name}\n`
        } else if(g instanceof String) {
            gstr += `${g}\n`
        } else {
            gstr += `${g}\n`
        }
    }

    let embed = {
        title: "Guilds",
        description: gstr,
        color: 0x000099
    }

    await interaction.createMessage({embeds: [embed]});
}