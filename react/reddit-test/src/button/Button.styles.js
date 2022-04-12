"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonStyled = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const styles_1 = require("../styles");
//size changes both font and  padding
exports.ButtonStyled = styled_components_1.default.button `
    margin: 0px;
    padding-right: ${props => styles_1.colors[props.color].padding};
    padding-left: ${props => styles_1.colors[props.color].padding};
    background-color: rgb(${props => styles_1.colors[props.color].rgb});
    color: rgb(${props => styles_1.colors[props.color].rgbText});
    /* border: ${props => props.border || "0px"}; */
    border: 0px;
    border-radius: 9999px;
    ${props => props.expands && "width: 100%;"};
    height: ${props => styles_1.buttonSize[props.size]};
    cursor: pointer;

    font-family: 'Noto Sans', Arial, sans-serif;
    font-weight: 700;
    font-size: ${props => styles_1.fontSize[props.size]};
    opacity: 1;


    :hover {
      background-color: rgba(${props => styles_1.colors[props.color].rgbaHover});
    }

    :active{
      background-color: rgba(${props => styles_1.colors[props.color].rgbaActive});
    }
`;
