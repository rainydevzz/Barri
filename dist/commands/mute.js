Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    let guild = interaction.client.guilds.find(g => g.id == interaction.guildID);
    let mem = guild.members.find(m => m.id == interaction.options.get('member'));
    let min = interaction.options.get('duration');
    let duration = (min * 60000) + new Date().getTime();
    let durtime = new Date(duration);
    let reason = interaction.options.get('reason') || "no reason provided";
    await mem.edit({ communicationDisabledUntil: durtime.toISOString(), reason: reason });
    let embed = {
        title: `${mem.username} Muted`,
        description: `User is muted until ${durtime.toUTCString()}`,
        color: 0xff0000,
        timestamp: new Date().toISOString()
    };
    await interaction.createMessage({ embeds: [embed] });
}
exports.execute = execute;
