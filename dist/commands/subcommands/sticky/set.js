Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.defer();
    const channel = interaction.client.guilds.find(g => g.id == interaction.guildID).channels.find(c => c.id == interaction.options.get('channel'));
    const res = await interaction.client.createSticky(channel, interaction.options.get('content'));
    switch (res) {
        case 'channel':
            await interaction.createFollowup({ content: 'a sticky message already exists in that channel!' });
            break;
        case 'guild':
            await interaction.createFollowup({ content: 'you have reached the limit of 5 sticky messages per guild!' });
            break;
        case true:
            await interaction.createFollowup({ content: 'sticky message succesfully created!' });
            break;
    }
}
exports.execute = execute;
