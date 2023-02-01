Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
async function execute(interaction) {
    await interaction.defer();
    const ml = interaction.options.get('mutelimit') || -1;
    const kl = interaction.options.get('kicklimit') || -1;
    const bl = interaction.options.get('banlimit') || -1;
    const os = interaction.options.get('onspam') || false;
    let du = interaction.options.get('muteduration') || -1;
    await interaction.client.db.warnsys.upsert({
        where: { guild: interaction.guildID },
        update: {
            mutelimit: ml,
            kicklimit: kl,
            banlimit: bl,
            onspam: os,
            duration: du * 60000
        },
        create: {
            guild: interaction.guildID,
            mutelimit: ml,
            kicklimit: kl,
            banlimit: bl,
            onspam: os,
            duration: du * 60000
        }
    });
    if (du == -1)
        du = "not set";
    let embed = {
        title: "Setup Complete",
        fields: [
            {
                name: "Mute Limit",
                value: ml
            },
            {
                name: "Kick Limit",
                value: kl
            },
            {
                name: "Ban Limit",
                value: bl
            },
            {
                name: "Warn On Spam",
                value: os
            },
            {
                name: "Mute Duration",
                value: `${du} minutes`
            }
        ],
        color: 0x000088
    };
    for (const f of embed.fields) {
        if (f.value == -1) {
            f.value = "not set";
        }
    }
    await interaction.createFollowup({ embeds: [embed] });
}
exports.execute = execute;
