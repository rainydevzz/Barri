Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.createMessage({ content: `🏓 Ping Pong! Latency is ${interaction.guild.shard.latency}ms!`, flags: 64 });
}
exports.execute = execute;
