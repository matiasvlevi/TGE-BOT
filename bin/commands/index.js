"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commands = {
    help: {
        permissions: ["ALL"],
        action: (msg, args) => {
            msg.channel.send("HELP MENU");
        }
    },
    horraire: {
        permissions: ["ALL"],
        action: (msg, args) => {
            msg.channel.send("Horraire command");
        }
    }
};
exports.default = commands;
