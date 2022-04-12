"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Community_styles_1 = require("./Community.styles");
const react_1 = __importStar(require("react"));
const Button_1 = __importDefault(require("../button/Button"));
const icons = {
    UP: "⬆",
    DOWN: "⬇",
    NONE: ""
};
const Community = ({ name, position, hasButton, logo, previousPosition, link }) => {
    const [positionChange, setPositionChange] = (0, react_1.useState)("NONE");
    (0, react_1.useEffect)(() => {
        if (previousPosition === position) {
            setPositionChange("NONE");
        }
        else {
            previousPosition > position ? setPositionChange("UP") : setPositionChange("DOWN");
        }
    }, [position, previousPosition]);
    // if(name.length > 16){
    //   name = `${name.substring(0, 16)}...`
    // }
    return (react_1.default.createElement(Community_styles_1.WrapperList, null,
        react_1.default.createElement(Community_styles_1.Content, { href: link },
            react_1.default.createElement(Community_styles_1.Position, null, position),
            react_1.default.createElement(Community_styles_1.PositionArrow, { icon: positionChange }, icons[positionChange]),
            react_1.default.createElement(Community_styles_1.Icon, { src: logo }),
            react_1.default.createElement(Community_styles_1.Link, null, name)),
        hasButton ? react_1.default.createElement(Button_1.default, { text: "Join", theme: "primary", size: "small" }) : ""));
};
exports.default = Community;
