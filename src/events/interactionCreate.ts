import { Interaction, InteractionTypes, CommandInteraction } from "oceanic.js";
import BotClient from "../bot";

export async function execute(bot: BotClient, interaction: any): Promise<void> {
    if(interaction.type === InteractionTypes.APPLICATION_COMMAND) {
        const cmdData = require(`../commands/${interaction.data.name}`);
        await cmdData.execute(interaction, bot);
    }
}

export const name = 'interactionCreate';