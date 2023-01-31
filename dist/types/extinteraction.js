Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtInteraction = void 0;
const oceanic_js_1 = require("oceanic.js");
const index_1 = require("../index");
class ExtInteraction extends oceanic_js_1.CommandInteraction {
    options = new Map();
    client = index_1.bot;
}
exports.ExtInteraction = ExtInteraction;
