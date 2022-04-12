"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const Button_1 = __importDefault(require("./Button"));
const CardBottom = ({ children }) => {
    return (<styles_1.CardBottomStyle>
      <Button_1.default text={children}/>
    </styles_1.CardBottomStyle>);
};
exports.default = CardBottom;
