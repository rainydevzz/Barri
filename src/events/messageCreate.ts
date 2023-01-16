import { BotClient } from "../bot";
import { Message, ChannelTypes } from "oceanic.js";

export async function execute(bot: BotClient, msg: Message) {
    if(msg.author.bot) return;
    if(msg.channel.type == ChannelTypes.DM) return;

    if(msg.content.includes(bot.user.mention)) {
        let embed = {
            title: "Hello!",
            description: `I see you have pinged me. I am ${bot.user.username} with many utilities and moderation features. See my commands with /help!`,
            color: 0x000080,
            timestamp: new Date().toISOString(),
            thumbnail: {url: bot.user.avatarURL("png")}
        }
        await msg.channel.createMessage({embeds: [embed]});
    }

    const r = await bot.checkSpam(msg);
    if(r && bot.dbCache.get(msg.guildID).onspam) {
        if(bot.isOwner(msg.author.id)) { return; }
        await bot.altWarns(msg, 1, msg.author.id);
        await bot.checkPunish(msg, msg.author.id);
    }
}

export const name = 'messageCreate';