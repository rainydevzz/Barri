import { ExtInteraction } from "../types/extinteraction";
import { BotClient } from "../bot";
import { Guild } from "oceanic.js"

export async function execute(interaction: ExtInteraction, bot: BotClient) {
    const guild: Guild = bot.guilds.find(g => g.id == interaction.guildID);
    const channel = guild.channels.find(c => c.id == interaction.options[0]);

    await channel.editPermission(); // todo
}