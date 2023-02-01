Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.execute = void 0;
const oceanic_js_1 = require("oceanic.js");
async function execute(bot, interaction) {
    if (interaction.type === oceanic_js_1.InteractionTypes.APPLICATION_COMMAND) {
        try {
            interaction.options = bot.getOptions(interaction.data.options.raw);
            let option = interaction.data.options.raw;
            if (option[0]) {
                option = option[0].type;
            }
            ;
            let cmdData;
            if (option == 1) {
                cmdData = require(`../commands/subcommands/${interaction.data.name}/${interaction.data.options.raw[0].name}`);
                await cmdData.execute(interaction, bot);
                return;
            }
            cmdData = require(`../commands/${interaction.data.name}`);
            await cmdData.execute(interaction, bot);
        }
        catch (err) {
            try {
                console.error(err);
                await interaction.createMessage({ content: "Uh oh! Something went wrong!", flags: 64 });
                return;
            }
            catch (err) {
                console.error(err);
                await interaction.createFollowup({ content: "Uh Oh! Something went wrong!", flags: 64 });
                return;
            }
        }
    }
}
exports.execute = execute;
exports.name = 'interactionCreate';
