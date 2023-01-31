Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const oceanic_js_1 = require("oceanic.js");
async function execute(interaction) {
    const guild = interaction.client.guilds.find(g => g.id == interaction.guildID);
    const channel = interaction.client.getChannel(interaction.options.get('channel'));
    const role = guild.roles.find(r => r.name == "@everyone");
    let embed = {
        title: "Locked Channel",
        description: "This channel is currently locked. No messages can be sent.",
        timestamp: new Date().toISOString(),
        color: 0x000080
    };
    try {
        await channel.editPermission(role.id, { deny: BigInt(1 << 11), type: oceanic_js_1.OverwriteTypes.ROLE });
        await channel.editPermission(interaction.client.user.id, { allow: BigInt(1 << 11), type: oceanic_js_1.OverwriteTypes.MEMBER });
        await interaction.createMessage({ content: `Locked Down ${channel.name}`, flags: 64 });
        await channel.createMessage({ embeds: [embed] });
    }
    catch (e) {
        await interaction.createMessage({ content: "Unable to lock, either due to missing perms or invalid channel type." });
        console.error(e);
    }
}
exports.execute = execute;
