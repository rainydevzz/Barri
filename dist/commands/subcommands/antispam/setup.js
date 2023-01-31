Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    const msgcount = interaction.options.get('messagecount');
    const interval = interaction.options.get('interval');
    const setting = interaction.options.get('setting');
    await interaction.client.db.antispam.upsert({
        where: { guild: interaction.guildID },
        update: {
            messagecount: msgcount,
            interval: interval * 1000,
            setting: setting
        },
        create: {
            guild: interaction.guildID,
            messagecount: msgcount,
            interval: interval * 1000,
            setting: setting
        }
    });
    let embed = {
        title: 'Setup Complete',
        description: `Message Limit Set to ${msgcount} and Interval limit set to ${interval}, and setting to ${setting}`,
        color: 0x000088
    };
    await interaction.createMessage({ embeds: [embed] });
}
exports.execute = execute;
