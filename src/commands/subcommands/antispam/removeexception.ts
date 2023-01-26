import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.defer();
    await interaction.client.db.ignoretable.delete({
        where: {
            id: interaction.options.get('id')
        }
    });

    await interaction.createFollowup({content: "ID removed if it was present in the database."})
}