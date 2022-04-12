"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const colors_1 = require("../../colors");
// import { Size, Color } from "./Button.types"
//size changes both font and  padding
const ButtonTheme = {
    primary: {
        padding: "16px",
        bgColor: colors_1.blue,
        textColor: colors_1.white,
        hoverColor: colors_1.blueActive1,
        activeColor: colors_1.blueActive2
    },
    extras: {
        padding: "8px",
        bgColor: colors_1.gray,
        textColor: colors_1.blue,
        hoverColor: colors_1.lightBlue,
        activeColor: colors_1.lightBlueActive
    }
};
const ButtonSize = {
    small: {
        height: 25,
        font: 12
    },
    big: {
        height: 32,
        font: 14
    }
};
exports.ButtonStyled = styled_components_1.default.button `
    margin: 0px;
    padding-right: ${props => ButtonTheme[props.theme].padding};
    padding-left: ${props => ButtonTheme[props.theme].padding};
    padding-bottom: 3px;
    background-color: ${props => ButtonTheme[props.theme].bgColor};
    color: ${props => ButtonTheme[props.theme].textColor};
    border: none;
    border-radius: 9999px;
    ${props => props.expands && "width: 100%;"};
    height: ${props => ButtonSize[props.size].height}px;
    cursor: pointer;


    font-family: 'Noto Sans', Arial, sans-serif;
    font-weight: 700;
    font-size: ${props => ButtonSize[props.size].font}px;
    opacity: 1;


    :hover {
      background-color: ${props => ButtonTheme[props.theme].hoverColor};
    }

    :active{
      background-color: ${props => ButtonTheme[props.theme].activeColor};
    }
`;
