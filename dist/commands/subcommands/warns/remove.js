Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    const r = await interaction.client.altWarns(interaction, -1, interaction.options.get('user'));
    if (r == 1) {
        await interaction.createMessage({ content: "Warns cannot be negative." });
        return;
    }
    await interaction.createMessage({ content: "Warn removed." });
}
exports.execute = execute;
