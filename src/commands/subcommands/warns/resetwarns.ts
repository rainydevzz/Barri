import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    const res = await interaction.client.checkWarns(interaction, interaction.options[0]);
    await interaction.client.altWarns(interaction, res - res, interaction.options[0]);
    await interaction.createMessage({content: "Reset warns for that user."});
}