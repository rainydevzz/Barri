import { BotClient } from "../bot";
import { Message } from "oceanic.js";

export async function execute(bot: BotClient, msg: Message) {
    if(msg.author.bot) return;
    let r = await bot.checkSpam(msg);
    console.log(r);
}

export const name = 'messageCreate';