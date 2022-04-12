"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ExtrasList_styles_1 = require("./ExtrasList.styles");
const Button_1 = __importDefault(require("../button/Button"));
const react_1 = __importDefault(require("react"));
const ExtrasList = ({ extras }) => {
    return (react_1.default.createElement(ExtrasList_styles_1.ExtrasContainerStyle, null, extras.map((item) => {
        return (react_1.default.createElement(ExtrasList_styles_1.Wrapper, { href: item.url },
            react_1.default.createElement(Button_1.default, { text: item.name, theme: "extras", size: "small" })));
    })));
};
exports.default = ExtrasList;
