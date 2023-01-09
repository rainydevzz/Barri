import { InteractionTypes } from "oceanic.js";
import { BotClient } from "../bot";

export async function execute(bot: BotClient, interaction: any): Promise<void> {
    if(interaction.type === InteractionTypes.APPLICATION_COMMAND) {
        interaction.options = bot.getOptions(interaction.data.options.raw);
        const cmdData = require(`../commands/${interaction.data.name}`);
        await cmdData.execute(interaction, bot);
    }
}

export const name = 'interactionCreate';