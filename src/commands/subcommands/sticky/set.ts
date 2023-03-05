import { TextChannel } from "oceanic.js";
import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.defer();
    const channel = interaction.client.guilds.find(g => g.id == interaction.guildID).channels.find(c => c.id == interaction.options.get('channel')) as TextChannel;
    const res = await interaction.client.createSticky(channel, interaction.options.get('content'));
    switch(res) {
        case 'channel': 
            await interaction.createFollowup({content: 'a sticky message already exists in that channel!'});
            break;
        
        case 'guild':
            await interaction.createFollowup({content: 'you have reached the limit of 5 sticky messages per guild!'});
            break;

        case true:
            await interaction.createFollowup({content: 'sticky message succesfully created!'});
            break;
    }
}