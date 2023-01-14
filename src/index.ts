import { BotClient } from './bot';
import { token } from './cfg.json';

export const bot = new BotClient({auth: `Bot ${token}`});
bot.startEventHandler();

process.on('uncaughtException', (err) => {
    console.error(err);
});

bot.connect();