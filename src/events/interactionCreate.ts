import { InteractionTypes } from "oceanic.js";
import { BotClient } from "../bot";

export async function execute(bot: BotClient, interaction: any): Promise<void> {
    if(interaction.type === InteractionTypes.APPLICATION_COMMAND) {
        try {
            interaction.options = bot.getOptions(interaction.data.options.raw);
            const cmdData = require(`../commands/${interaction.data.name}`);
            await cmdData.execute(interaction, bot);
        } catch (err) {
            await interaction.createMessage({content: "Uh oh! Something went wrong!", flags: 64});
            console.error(err);
            return;
        }
    }
}

export const name = 'interactionCreate';