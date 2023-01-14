import { CommandInteraction } from "oceanic.js";
import { BotClient } from "../bot";
import { bot } from "../index";

export class ExtInteraction extends CommandInteraction {
    options = []
    client: BotClient = bot
}