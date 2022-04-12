"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.CardTop = exports.CardStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.CardStyle = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  margin: 0px;
  color: black;
  border: 1px solid rgb(205, 205, 205);
  position: relative;
`;
exports.CardTop = styled_components_1.default.div `
  height: 80px;
  width: 100%;
  margin-top: 0px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: white;
  font-size: 16px;
  font-weight: 500;

  background-image: url(${(props) => props.backgroundURL});
  background-position-x: 50%;
  background-position-y: 50%;

  display: flex;
  align-items: flex-end;

  ::before {
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.7) 0px,
      transparent
    );
    height: 80px;
    width: 100%;
    background-position-x: 0%;
    background-position-y: 0%;
    position: absolute;
    content: "";
  }
`;
exports.Link = styled_components_1.default.a `
  margin-bottom: 10px;
  margin-left: 16px;
  color: white;
  text-decoration: none;
  line-height: 20px;
  position: relative;
`;
