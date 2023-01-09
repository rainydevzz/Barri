import { BotClient } from '../bot';

export async function execute(bot: BotClient): Promise<void> {
    await bot.initialize();
    console.log("Please star this repo on GitHub if you found it useful!");
}

export const name = 'ready';