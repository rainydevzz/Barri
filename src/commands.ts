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
    }
];

export default commands;