import { CommandInteraction } from "oceanic.js";

export async function execute(interaction: CommandInteraction): Promise<void> {
    await interaction.createMessage({content: `🏓 Ping Pong! Latency is ${interaction.guild.shard.latency}ms!`, flags: 64});
}