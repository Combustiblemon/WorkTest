"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CardBottom_styles_1 = require("./CardBottom.styles");
const Button_1 = __importDefault(require("../button/Button"));
const react_1 = __importDefault(require("react"));
const CardBottom = ({ text, link }) => {
    return (react_1.default.createElement(CardBottom_styles_1.CardBottomStyle, { href: link },
        react_1.default.createElement(Button_1.default, { text: text, expands: true, size: "big", theme: "primary" })));
};
exports.default = CardBottom;
