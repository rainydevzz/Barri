import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    await interaction.defer();
    const user = interaction.options.get('user');
    const res = await interaction.client.checkWarns(interaction, user);
    await interaction.client.altWarns(interaction, res - res, user);
    await interaction.createFollowup({content: "Reset warns for that user."});
}