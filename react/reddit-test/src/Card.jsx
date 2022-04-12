"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const List_1 = __importDefault(require("./List"));
const ExtrasList_1 = __importDefault(require("./ExtrasList"));
const CardBottom_1 = __importDefault(require("./CardBottom"));
const Card = ({ backgroundURL, text, data }) => {
    return (<styles_1.CardStyle>
      <styles_1.CardTop backgroundURL={backgroundURL}>
        <p>{text}</p>
      </styles_1.CardTop>
      <List_1.default data={data.get}/>
      <CardBottom_1.default>View All</CardBottom_1.default>
      <ExtrasList_1.default extras={data.extras}/>
    </styles_1.CardStyle>);
};
exports.default = Card;
