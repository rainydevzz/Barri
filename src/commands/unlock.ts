import { ExtInteraction } from "../types/extinteraction";
import { BotClient } from "../bot";
import { Guild, Role, OverwriteTypes, TextChannel } from "oceanic.js"

export async function execute(interaction: ExtInteraction, bot: BotClient) {
    const guild: Guild = bot.guilds.find(g => g.id == interaction.guildID);
    const channel: TextChannel = bot.getChannel(interaction.options[0]);
    const role: Role = guild.roles.find(r => r.name == "@everyone");

    let embed = {
        title: "Unlocked Channel",
        description: "This channel has been unlocked.",
        timestamp: new Date().toISOString(),
        color: 0x000080
    }

    try {
        await channel.editPermission(role.id, {allow: BigInt(1 << 11), type: OverwriteTypes.ROLE});
        await interaction.createMessage({content: `Unlocked ${channel.name}`, flags: 64});
        await channel.createMessage({embeds: [embed]});
    } catch (e) {
        await interaction.createMessage({content: "Unable to unlock, either due to missing perms or invalid channel type."});
        console.error(e);
    }
}