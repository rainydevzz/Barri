import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.defer();
    const res = await interaction.client.db.ignoretable.findFirst({
        where: {AND: {
            id: interaction.options.get('id'),
            guild: interaction.guildID
        }}
    });

    if(!res) {
        await interaction.client.db.ignoretable.create({
            data: {
                id: interaction.client.genString(),
                guild: interaction.guildID,
                user: interaction.user.id
            }
        });
        await interaction.createFollowup({content: `ID ${interaction.options.get('id')} added!`});
    } else {
        await interaction.createFollowup({content: "Already in DB!"});
    }
}