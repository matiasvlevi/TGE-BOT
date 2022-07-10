"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const conf = (0, dotenv_1.config)().parsed;
exports.default = conf || {};
