import { BotClient } from './bot';
import dotenv from 'dotenv';
import { ActivityTypes } from 'oceanic.js';

dotenv.config()

export const bot = new BotClient(
    {
        auth: process.env.TOKEN,
        collectionLimits: {messages: 10, members: Infinity, users: Infinity}, 
        gateway: {
            maxShards: 'auto',
            presence: {
                activities: [{
                    type: ActivityTypes.WATCHING, name: 'your server'
                }],
                status: 'online'
            }
        },
    }
);

bot.startEventHandler();

process.on('uncaughtException', (err) => {
    console.error(err);
});

bot.connect();