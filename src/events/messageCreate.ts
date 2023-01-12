import { BotClient } from "../bot";
import { Message } from "oceanic.js";

export async function execute(bot: BotClient, msg: Message) {
    let r = await bot.checkSpam(msg.guild.id, msg);
    console.log(r);
}

export const name = 'messageCreate';