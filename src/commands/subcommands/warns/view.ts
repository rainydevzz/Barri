import { ExtInteraction } from "../../../types/extinteraction";

export async function execute(interaction: ExtInteraction) {
    const member = interaction.client.guilds.find(g => g.id == interaction.guildID).members.find(m => m.id == interaction.options.get('user'));
    const res = await interaction.client.checkWarns(interaction, interaction.options.get('user'));
    let embed = {
        title: `Warns for ${member.tag}`,
        description: `User has ${res} warns.`,
        color: 0x0000ff
    }

    await interaction.createMessage({embeds: [embed]});
}