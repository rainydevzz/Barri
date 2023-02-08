import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.defer();
    await interaction.client.db.ignoretable.deleteMany({
        where: { 
            AND: {
                guild: interaction.guildID,
                user: interaction.user.id
            }
        }
    });

    await interaction.createFollowup({content: "ID removed if it was present in the database."})
}