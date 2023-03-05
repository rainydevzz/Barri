import { TextChannel } from "oceanic.js";
import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.defer();
    const channel = interaction.client.guilds.find(g => g.id == interaction.guildID).channels.find(c => c.id == interaction.options.get('channel')) as TextChannel;
    await interaction.client.deleteSticky(channel);
    await interaction.createMessage({content: "Sticky message removed if it existed."});
}