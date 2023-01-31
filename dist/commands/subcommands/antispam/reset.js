Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.client.db.antispam.delete({ where: { guild: interaction.guildID } });
    await interaction.createMessage({ content: "Deleted antispam settings!" });
}
exports.execute = execute;
