"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = exports.Icon = exports.PositionArrow = exports.Position = exports.Content = exports.ItemStyle = exports.WrapperList = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.WrapperList = styled_components_1.default.div `
  height: 49px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  /* border-top: 1px solid rgb(237, 239, 241); */
  border-bottom: 1px solid rgb(237, 239, 241);
  font-size: 14px;
  font-weight: 500;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  gap: 10px;
`;
exports.ItemStyle = styled_components_1.default.span `
`;
exports.Content = styled_components_1.default.div `
  display: flex;
  align-items: center;
  gap: 8px;
`;
exports.Position = styled_components_1.default.span `
  font-size: 14px;
  text-align: end;
  font-weight: 500;
  width: 20px;
`;
exports.PositionArrow = styled_components_1.default.div `
  font-size: 18px;
  width: 10px;
  color: ${props => props.icon === "UP" ? "green" : "red"};
`;
exports.Icon = styled_components_1.default.img `
  border-radius: 9999px;
  padding-left: 2px;
  width: 32px;
  height: 32px;
`;
exports.Link = styled_components_1.default.div `
  flex: 1;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
