import { BotClient } from '../bot';
import { ActivityTypes } from 'oceanic.js';

export async function execute(bot: BotClient): Promise<void> {
    await bot.initialize();
    console.log("Please star this repo on GitHub if you found it useful!");
    bot.cycleStatus([
        {
            type: ActivityTypes.WATCHING,
            name: 'your server'
        },
        {
            type: ActivityTypes.WATCHING,
            name: `${bot.guilds.toArray().length} guilds`
        },
        {
            type: ActivityTypes.WATCHING,
            name: `${bot.getMemberLength()} members`
        }
    ]);
}

export const name = 'ready';