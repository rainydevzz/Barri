Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    let user = interaction.options.get('user');
    let guild = interaction.client.guilds.find(g => g.id == interaction.guildID);
    let bans = await guild.getBans();
    let res = bans.find(b => b.user.id == user);
    if (!res)
        return await interaction.createMessage({ content: "Could not find that user!", flags: 64 });
    await guild.removeBan(user);
    await interaction.createMessage({ content: `${res.user.tag} unbanned!` });
}
exports.execute = execute;
