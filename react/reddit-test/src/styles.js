"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = exports.fontSize = exports.buttonSize = exports.colors = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.colors = {
    blue: {
        rgb: "0, 121, 211",
        rgbText: "255, 255, 255",
        rgbaHover: "0, 121, 211, 0.8",
        rgbaActive: "0, 121, 211, 0.7",
        padding: "16px"
    },
    gray: {
        rgb: "246, 247, 248",
        rgbText: "0, 121, 211",
        rgbaHover: "0, 121, 211, 0.12",
        rgbaActive: "0, 121, 211, 0.22",
        padding: "8px"
    }
};
exports.buttonSize = {
    small: "25px",
    big: "32px"
};
exports.fontSize = {
    small: "12px",
    big: "14px"
};
exports.Wrapper = styled_components_1.default.div `
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

`;
