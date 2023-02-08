Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.defer();
    await interaction.client.db.ignoretable.deleteMany({
        where: {
            AND: {
                guild: interaction.guildID,
                user: interaction.user.id
            }
        }
    });
    await interaction.createFollowup({ content: "ID removed if it was present in the database." });
}
exports.execute = execute;
