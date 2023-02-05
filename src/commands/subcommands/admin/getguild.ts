import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    if(!interaction.client.isOwner(interaction.user.id)) {
        await interaction.createMessage({content: "This command is for bot owners only.", flags: 64});
        return;
    }

    const guild = interaction.client.guilds.find(g => g.id == interaction.options.get('guild'));
    if(!guild) {
        await interaction.createMessage({content: "Guild not found."});
        return;
    }
    let embed = {
        title: `Info For ${guild.name}`,
        thumbnail: {url: guild.iconURL("png")},
        fields: [
            {
                name: 'Created At',
                value: guild.createdAt.toUTCString()
            },
            {
                name: 'Members',
                value: `${guild.memberCount}`
            },
            {
                name: 'Owner ID',
                value: guild.ownerID
            }
        ]
    }
    await interaction.createMessage({embeds: [embed]});
}