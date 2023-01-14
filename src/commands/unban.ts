import { ExtInteraction } from "../types/extinteraction";
import { BotClient } from "../bot";

export async function execute(interaction, bot) {
    let user = interaction.options[0];
    let guild = bot.guilds.find(g => g.id == interaction.guildID);
    let bans = await guild.getBans();
    let res = bans.find(b => b.user.id == user);
    if(!res)
    return await interaction.createMessage({content: "Could not find that user!", flags: 64});
    
    await guild.removeBan(user);

    await interaction.createMessage({content: `${res.user.tag} unbanned!`});
}