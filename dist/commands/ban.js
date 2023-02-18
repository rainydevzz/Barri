Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.defer();
    let guild = interaction.client.guilds.find(g => g.id == interaction.guildID);
    let user = await guild.getMember(interaction.options.get('user'));
    let reason;
    if (!interaction.options.get('reason')) {
        reason = "none provided";
    }
    else {
        reason = interaction.options.get('reason');
    }
    ;
    await user.ban({ reason: reason });
    let embed = { title: `${user.tag} was banned.`, description: `Reason: ${reason}`, color: 0xff0000 };
    await interaction.createFollowup({ embeds: [embed] });
}
exports.execute = execute;
