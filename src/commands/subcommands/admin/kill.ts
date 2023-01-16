import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    if(!interaction.client.isOwner(interaction.user.id)) {
        await interaction.createMessage({content: "This command is for bot owners only.", flags: 64});
        return;
    }
    await interaction.createMessage({content: "Shutting down..."});
    process.kill(process.pid);
}