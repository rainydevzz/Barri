import { ExtInteraction } from "../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    let guild = interaction.client.guilds.find(g => g.id == interaction.guildID);
    let user = await guild.getMember(interaction.options[0]);
    let reason: string;
    if(!interaction.options[1]) {
        reason = "none provided";
    } else {
        reason = interaction.options[1];
    };

    await user.ban({reason: reason});
    let embed = { title: `${user.tag} was banned.`, description: `Reason: ${reason}`, color: 0xff0000 };
    await interaction.createMessage({embeds: [embed]});
}