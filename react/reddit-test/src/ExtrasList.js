"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const Button_1 = __importDefault(require("./button/Button"));
const react_1 = __importDefault(require("react"));
const ExtrasList = ({ extras }) => {
    return (react_1.default.createElement(styles_1.ExtrasContainerStyle, null, extras.map((item) => {
        return (react_1.default.createElement(styles_1.ExtrasSpan, null,
            react_1.default.createElement(Button_1.default, { text: item, size: "small", color: "gray" })));
    })));
};
exports.default = ExtrasList;
