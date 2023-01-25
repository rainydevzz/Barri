import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    const user = interaction.options.get('user');
    const res = await interaction.client.checkWarns(interaction, user);
    await interaction.client.altWarns(interaction, res - res, user);
    await interaction.createMessage({content: "Reset warns for that user."});
}