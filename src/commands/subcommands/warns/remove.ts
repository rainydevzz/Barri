import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.client.altWarns(interaction, -1, interaction.options[0]);
    await interaction.createMessage({content: "Warn removed."});
}