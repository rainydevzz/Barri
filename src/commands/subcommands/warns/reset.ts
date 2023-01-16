import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.client.db.warnsys.delete({where: {guild: interaction.guildID}});
    await interaction.createMessage({content: "Deleted Warn Settings"});
}