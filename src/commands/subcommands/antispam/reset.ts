import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.client.db.antispam.delete({where: {guild: interaction.guildID}});
    await interaction.createMessage({content: "Deleted antispam settings!"});
}