Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.defer();
    const channel = interaction.client.guilds.find(g => g.id == interaction.guildID).channels.find(c => c.id == interaction.options.get('channel'));
    await interaction.client.deleteSticky(channel);
    await interaction.createMessage({ content: "Sticky message removed if it existed." });
}
exports.execute = execute;
