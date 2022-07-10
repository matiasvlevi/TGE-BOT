"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSelf = void 0;
function isSelf(msg, bot) {
    var _a;
    return (msg.author.username === ((_a = bot.user) === null || _a === void 0 ? void 0 : _a.username));
}
exports.isSelf = isSelf;
