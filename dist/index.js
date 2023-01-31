var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const bot_1 = require("./bot");
const dotenv_1 = __importDefault(require("dotenv"));
const oceanic_js_1 = require("oceanic.js");
dotenv_1.default.config();
exports.bot = new bot_1.BotClient({
    auth: process.env.TOKEN,
    collectionLimits: { messages: 10, members: Infinity, users: Infinity },
    gateway: {
        maxShards: 'auto',
        presence: {
            activities: [{
                    type: oceanic_js_1.ActivityTypes.WATCHING, name: 'your server'
                }],
            status: 'online'
        }
    },
});
exports.bot.startEventHandler();
process.on('uncaughtException', (err) => {
    console.error(err);
});
exports.bot.connect();
