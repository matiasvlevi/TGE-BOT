"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const config_1 = __importDefault(require("./config"));
function parse(msg) {
    // Abort if message is not a command	
    if (msg.content[0] !== config_1.default.PREFIX)
        return {
            name: "",
            args: [],
            invalid: true
        };
    // Remove prefix from query
    let content = msg.content.split(config_1.default.PREFIX)[1];
    // Get command arguments, and name
    let args = content.split(" ");
    let name = args[0];
    args.splice(0, 1);
    return {
        name,
        args,
        invalid: false
    };
}
exports.parse = parse;
