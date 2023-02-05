Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.execute = void 0;
const oceanic_js_1 = require("oceanic.js");
async function execute(bot) {
    await bot.initialize();
    console.log("Please star this repo on GitHub if you found it useful!");
    bot.cycleStatus([
        {
            type: oceanic_js_1.ActivityTypes.WATCHING,
            name: 'your server'
        },
        {
            type: oceanic_js_1.ActivityTypes.WATCHING,
            name: `${bot.guilds.toArray().length} guilds`
        },
        {
            type: oceanic_js_1.ActivityTypes.WATCHING,
            name: `${bot.getMemberLength()} members`
        }
    ]);
}
exports.execute = execute;
exports.name = 'ready';
