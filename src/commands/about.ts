import { ExtInteraction } from "../types/extinteraction";

export async function execute(interaction: ExtInteraction): Promise<void> {
    let embed = {
        title: `About ${interaction.client.user.username}`,
        description: 'Hello! I am a moderation bot with several useful utilities. Run /help for more info!',
        color: 0x00008b,
        timestamp: new Date().toISOString(),
        thumbnail: {url: interaction.client.user.avatarURL("png")}
    }

    await interaction.createMessage({embeds: [embed]});
}