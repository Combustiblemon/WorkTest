"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const react_1 = __importDefault(require("react"));
const Button_1 = __importDefault(require("./Button"));
const Community = ({ name, position, hasButton, backgroundURL, previousPosition }) => {
    return (react_1.default.createElement(styles_1.WrapperList, null,
        react_1.default.createElement(styles_1.Content, null,
            react_1.default.createElement(styles_1.Position, null, `${position}.`),
            react_1.default.createElement(styles_1.Icon, { src: backgroundURL }),
            react_1.default.createElement(styles_1.Link, null, name)),
        hasButton ? react_1.default.createElement(Button_1.default, { size: "small", text: "Join", color: "blue" }) : ""));
};
exports.default = Community;
