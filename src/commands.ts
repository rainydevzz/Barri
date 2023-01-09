import { ApplicationCommandTypes, ApplicationCommandOptionTypes } from "oceanic.js";

const commands: Array<any> = [
    {
        name: 'ping',
        description: 'ping the bot!',
        type: ApplicationCommandTypes.CHAT_INPUT
    },
    {
        name: 'about',
        description: 'see some info about the bot',
        type: ApplicationCommandTypes.CHAT_INPUT
    },
    {
        name: 'help',
        description: 'see the bot commands!',
        type: ApplicationCommandOptionTypes.CHAT_INPUT,
        options: [
            {
                name: 'command',
                description: 'see a specific command info!',
                type: ApplicationCommandOptionTypes.STRING,
                required: false
            }
        ]
    }
];

export default commands;