"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const react_1 = __importDefault(require("react"));
const Button = ({ text, size = "small", color = "blue", expands = false }) => {
    return react_1.default.createElement(styles_1.ButtonStyle, { size: size, color: color, expands: expands }, text);
};
exports.default = Button;
