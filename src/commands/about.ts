import { CommandInteraction } from "oceanic.js";
import BotClient from "../bot";

export async function execute(interaction: CommandInteraction, bot: BotClient): Promise<void> {
    let embed = {
        title: `About ${bot.user.username}`,
        description: 'Hello! I am a moderation bot with several useful utilities. Run /help for more info!',
        color: 0x00008b,
        timestamp: new Date().toISOString(),
        thumbnail: bot.user.avatarURL("png")
    }

    await interaction.createMessage({embeds: [embed]});
}