import { ExtInteraction } from "../types/extinteraction";
import { BotClient } from "../bot";

export async function execute(interaction: ExtInteraction, bot: BotClient) {
    let guild = bot.guilds.find(g => g.id == interaction.guildID);
    let user = await guild.getMember(interaction.options[0]);
    let reason;
    if(!interaction.options[1]) {
        reason = "none provided";
    } else {
        reason = interaction.options[1];
    }

    await user.kick({reason: reason});
    let embed = { title: `${user.tag} was kicked :c`, description: `Reason: ${reason}`, color: 0xde3163 };
    await interaction.createMessage({embeds: [embed]});
}