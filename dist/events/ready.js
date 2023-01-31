Object.defineProperty(exports, "__esModule", { value: true });
exports.name = exports.execute = void 0;
async function execute(bot) {
    await bot.initialize();
    console.log("Please star this repo on GitHub if you found it useful!");
}
exports.execute = execute;
exports.name = 'ready';
