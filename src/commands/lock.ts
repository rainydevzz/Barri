import { ExtInteraction } from "../types/extinteraction";
import { BotClient } from "../bot";
import { Guild, Role, OverwriteTypes, TextChannel, Member } from "oceanic.js"

export async function execute(interaction: ExtInteraction, bot: BotClient) {
    const guild: Guild = bot.guilds.find(g => g.id == interaction.guildID);
    const channel: TextChannel = bot.getChannel(interaction.options[0]);
    const role: Role = guild.roles.find(r => r.name == "@everyone");

    let embed = {
        title: "Locked Channel",
        description: "This channel is currently locked. No messages can be sent.",
        timestamp: new Date().toISOString(),
        color: 0x000080
    }

    await channel.editPermission(role.id, {deny: BigInt(1 << 11), type: OverwriteTypes.ROLE});
    await channel.editPermission(bot.user.id, {allow: BigInt(1 << 11), type: OverwriteTypes.MEMBER});
    await interaction.createMessage({content: `Locked Down ${channel.name}`, flags: 64});
    await channel.createMessage({embeds: [embed]});
}