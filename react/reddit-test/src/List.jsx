"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListItem_1 = __importDefault(require("./ListItem"));
const List = ({ data }) => {
    return (<div>
      <ListItem_1.default>hello</ListItem_1.default>
      <ListItem_1.default>hello</ListItem_1.default>
      <ListItem_1.default>hello</ListItem_1.default>
    </div>);
};
exports.default = List;
