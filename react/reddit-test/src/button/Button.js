"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_styles_1 = require("./Button.styles");
const react_1 = __importDefault(require("react"));
const Button = ({ type = "button", text, size = "small", color = "blue", border, expands = false, callback }) => {
    const handleClick = (e) => {
        if (callback) {
            callback(e);
        }
    };
    return react_1.default.createElement(Button_styles_1.ButtonStyled, { type: type, size: size, color: color, border: border, expands: expands, onClick: (e) => { handleClick(e); } }, text);
};
exports.default = Button;
