import { ExtInteraction } from "../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    let guild = interaction.client.guilds.find(g => g.id == interaction.guildID);
    let mem = guild.members.find(m => m.id == interaction.options[0]);
    let min = interaction.options[1];
    let duration = (min * 60000) + new Date().getTime();
    let durtime = new Date(duration);
    let reason = interaction.options[2] || "no reason provided";
    await mem.edit({communicationDisabledUntil: durtime.toISOString(), reason: reason});
    let embed = {
        title: `${mem.username} Muted`,
        description: `User is muted until ${durtime.toUTCString()}`,
        color: 0xff0000,
        timestamp: new Date().toISOString()
    }
    await interaction.createMessage({embeds: [embed]});
}