Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    if (!interaction.client.isOwner(interaction.user.id)) {
        await interaction.createMessage({ content: "This command is for bot owners only.", flags: 64 });
        return;
    }
    await interaction.createMessage({ content: "Shutting down..." });
    process.kill(process.pid);
}
exports.execute = execute;
