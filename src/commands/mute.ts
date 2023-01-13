import { ExtInteraction } from "../types/extinteraction";
import { BotClient } from "../bot";

export async function execute(interaction: ExtInteraction, bot: BotClient) {
    let guild = bot.guilds.find(g => g.id == interaction.guildID);
    let mem = guild.members.find(m => m.id == interaction.options[0]);
    let min = interaction.options[1];
    let duration = (min * 60000) + new Date().getTime();
    let durtime = new Date(duration);
    let reason = interaction.options[2] || "no reason provided";
    await mem.edit({communicationsDisabledUntil: durtime.toISOString(), reason: reason});
    let embed = {
        title: `${mem.username} Muted`,
        description: `User is muted until ${durtime.toUTCString()}`,
        color: 0xff0000,
        timestamp: new Date().toISOString()
    }
    await interaction.createMessage({embeds: [embed]});
}