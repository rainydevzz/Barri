Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    let guild = interaction.client.guilds.find(g => g.id == interaction.guildID);
    let user = await guild.getMember(interaction.options.get('user'));
    let reason = interaction.options.get('reason') || "no reason provided";
    await user.kick(reason);
    let embed = { title: `${user.tag} was kicked :c`, description: `Reason: ${reason}`, color: 0xde3163 };
    await interaction.createMessage({ embeds: [embed] });
}
exports.execute = execute;
