Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.defer();
    let guild = interaction.client.guilds.find(g => g.id == interaction.guildID);
    let mem = guild.members.find(m => m.id == interaction.options.get('user'));
    await mem.edit({ communicationDisabledUntil: null });
    let embed = {
        title: `${mem.username} Unmuted`,
        color: 0x0000ea,
        timestamp: new Date().toISOString()
    };
    await interaction.createFollowup({ embeds: [embed] });
}
exports.execute = execute;
