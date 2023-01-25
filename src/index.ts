import { BotClient } from './bot';
import dotenv from 'dotenv';

dotenv.config()

export const bot = new BotClient({auth: process.env.TOKEN, collectionLimits: {messages: 10, members: Infinity, users: Infinity}, gateway: {maxShards: 'auto'}});
bot.startEventHandler();

process.on('uncaughtException', (err) => {
    console.error(err);
});

bot.connect();