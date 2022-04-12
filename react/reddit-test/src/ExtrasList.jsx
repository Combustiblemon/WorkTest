"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const Button_1 = __importDefault(require("./Button"));
const ExtrasList = ({ extras }) => {
    return (<styles_1.ExtrasContainerStyle>
      {extras.map((item) => {
            return (<styles_1.ExtrasSpan key={item}>
            <Button_1.default text={item}/>
          </styles_1.ExtrasSpan>);
        })}
    </styles_1.ExtrasContainerStyle>);
};
exports.default = ExtrasList;
