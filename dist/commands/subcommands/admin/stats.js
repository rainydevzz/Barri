Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const oceanic_js_1 = require("oceanic.js");
async function execute(interaction) {
    if (!interaction.client.isOwner(interaction.user.id)) {
        await interaction.createMessage({ content: "This command is for bot owners only.", flags: 64 });
        return;
    }
    else {
        let shardID = interaction.guild.shard.id || "not cached";
        let embed = {
            title: `Bot stats for ${interaction.client.user.username}`,
            fields: [
                {
                    name: "Library",
                    value: `Oceanic ${oceanic_js_1.VERSION}`,
                    inline: true
                },
                {
                    name: "Memory Usage",
                    value: `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,
                    inline: true
                },
                {
                    name: "CPU Usage",
                    value: `${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%`,
                    inline: true
                },
                {
                    name: "Guild Count",
                    value: `${interaction.client.guilds.toArray().length}`,
                    inline: true
                },
                {
                    name: "Shard Count",
                    value: `${interaction.client.shards.toArray().length}`,
                    inline: true
                },
                {
                    name: "Guild Shard ID",
                    value: `${shardID}`,
                    inline: true
                }
            ],
            color: 0xadd8e6,
            thumbnail: { url: interaction.client.user.avatarURL("png") },
            timestamp: new Date().toISOString()
        };
        await interaction.createMessage({ embeds: [embed] });
    }
}
exports.execute = execute;
