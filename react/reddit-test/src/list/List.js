"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Community_1 = __importDefault(require("../community/Community"));
const react_1 = __importDefault(require("react"));
const List = ({ communities }) => {
    return react_1.default.createElement(react_1.default.Fragment, null, communities.map((community) => {
        return (react_1.default.createElement(Community_1.default, { key: community.name, logo: community.img, position: community.position, hasButton: community.join, name: community.name, previousPosition: community.previousPosition, link: community.url }));
    }));
};
exports.default = List;
