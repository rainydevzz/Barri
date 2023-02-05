Object.defineProperty(exports, "__esModule", { value: true });
exports.execute = void 0;
const oceanic_js_1 = require("oceanic.js");
async function execute(interaction) {
    if (!interaction.client.isOwner(interaction.user.id)) {
        await interaction.createMessage({ content: "This command is for bot owners only.", flags: 64 });
        return;
    }
    let gstr = "";
    for (const g of interaction.client.guilds) {
        if (g instanceof oceanic_js_1.Guild) {
            gstr += `${g.name}\n`;
        }
        else if (g instanceof String) {
            gstr += `${g}\n`;
        }
        else {
            gstr += `${g}\n`;
        }
    }
    let embed = {
        title: "Guilds",
        description: gstr,
        color: 0x000099
    };
    await interaction.createMessage({ embeds: [embed] });
}
exports.execute = execute;
