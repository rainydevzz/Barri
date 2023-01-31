var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const oceanic_js_1 = require("oceanic.js");
const commands_1 = __importDefault(require("../commands"));
async function execute(interaction) {
    if (!interaction.options.get('command')) {
        let descStr = "";
        for (const c of commands_1.default) {
            descStr += `**${c.name}** - ${c.description}\n`;
        }
        let embed = {
            title: 'Help Commands',
            description: descStr,
            color: 0x072a6c
        };
        await interaction.createMessage({ embeds: [embed] });
        return;
    }
    else {
        let opt = interaction.options.get('command');
        let opt2 = commands_1.default.find(c => c.name == opt);
        if (!opt2) {
            await interaction.createMessage({ content: "no command found by that name!" });
            return;
        }
        if (opt.type == oceanic_js_1.ApplicationCommandOptionTypes.SUB_COMMAND) {
            let descStr = "";
            for (const o of opt2.options) {
                descStr += `**${o.name}** - ${o.description}\n`;
            }
            let embed = {
                title: 'Help Commands',
                description: descStr,
                color: 0x072a6c
            };
            await interaction.createMessage({ embeds: [embed] });
            return;
        }
        else {
            let descStr = "";
            if (opt2.options !== undefined) {
                for (const c of opt2.options) {
                    descStr += `**${c.name}** - ${c.description}\n`;
                }
            }
            else {
                descStr = "No Options";
            }
            let embed = {
                title: `Help for ${opt2.name}`,
                description: descStr,
                color: 0x072a6c
            };
            await interaction.createMessage({ embeds: [embed] });
            return;
        }
    }
}
exports.execute = execute;
