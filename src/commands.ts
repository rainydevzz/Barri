import { ApplicationCommandType, ApplicationCommandOptionType } from "discord.js";

const commands: Array<any> = [
    {
        name: 'ping',
        description: 'ping the bot!',
        type: ApplicationCommandType.ChatInput
    }
];

export default commands;