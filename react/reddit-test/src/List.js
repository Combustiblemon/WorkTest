"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Community_1 = __importDefault(require("./community/Community"));
const react_1 = __importDefault(require("react"));
const styles_1 = require("./styles");
const List = ({ data }) => {
    return (react_1.default.createElement(styles_1.ListStyle, null, data.map((item) => {
        return (react_1.default.createElement(Community_1.default, { backgroundURL: item.img, position: item.position, hasButton: item.join, name: item.name }));
    })));
};
exports.default = List;
