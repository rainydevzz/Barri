import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    const r = await interaction.client.altWarns(interaction, 1, interaction.options[0]);
    if(r == 1) {
        await interaction.createMessage({content: "Warns cannot be negative."});
        return;
    }
    await interaction.createMessage({content: "Warn added."});
}