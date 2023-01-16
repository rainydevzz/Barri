import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    const ml = interaction.options[0];
    const kl = interaction.options[1];
    const bl = interaction.options[2];
    const os = interaction.options[3];
    const du = interaction.options[4];
    await interaction.client.db.warnsys.upsert({
        where: {guild: interaction.guildID},
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
    }

    await interaction.createMessage({embeds: [embed]})
}