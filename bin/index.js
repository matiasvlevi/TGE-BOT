"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const index_1 = __importDefault(require("./commands/index"));
const isSelf_1 = require("./isSelf");
const parse_1 = require("./parse");
const discord_js_1 = require("discord.js");
const bot = new discord_js_1.Client({
    intents: ["GUILDS", "GUILD_MESSAGES"]
});
bot.on('ready', () => {
    var _a;
    console.log(`Bot connected as: ${(_a = bot.user) === null || _a === void 0 ? void 0 : _a.tag}`);
});
bot.on('messageCreate', (msg) => {
    // Abort if bot reads its own message
    if ((0, isSelf_1.isSelf)(msg, bot))
        return;
    // Parse input
    const res = (0, parse_1.parse)(msg);
    // Abort if command could not parse
    if (res.invalid)
        return;
    // Abort if command doesnt exist
    if (index_1.default[res.name] === undefined)
        return; // INPUT ERROR HANDLING 
    // Run the command
    index_1.default[res.name].action(msg, res.args);
});
bot.login(config_1.default.TOKEN);
