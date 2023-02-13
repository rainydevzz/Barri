Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.execute = void 0;
async function execute(bot, guild) {
    const hook = bot.joinHook;
    let embed = {
        title: `Joined ${guild.name}`,
        thumbnail: { url: guild.iconURL("png") },
        fields: [
            {
                name: 'Owner ID',
                value: `${guild.ownerID}`
            },
            {
                name: 'Members',
                value: `${guild.memberCount}`
            },
            {
                name: 'Created At',
                value: guild.createdAt.toUTCString()
            },
            {
                name: 'Guild ID',
                value: `${guild.id}`
            }
        ]
    };
    await hook.execute({ embeds: [embed] }, process.env.JOIN_HOOK);
}
exports.execute = execute;
exports.name = 'guildCreate';
