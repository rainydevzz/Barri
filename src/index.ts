import BotClient from './bot';
import { token } from './cfg.json';

const bot = new BotClient({auth: `Bot ${token}`});
bot.startEventHandler();

bot.connect();