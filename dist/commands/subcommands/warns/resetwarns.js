Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.defer();
    const user = interaction.options.get('user');
    const res = await interaction.client.checkWarns(interaction, user);
    await interaction.client.altWarns(interaction, res - res, user);
    await interaction.createFollowup({ content: "Reset warns for that user." });
}
exports.execute = execute;
