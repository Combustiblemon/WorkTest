"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = exports.ExtrasContainerStyle = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
exports.ExtrasContainerStyle = styled_components_1.default.div `
  padding: 0px 12px 12px;
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 8px;
`;
exports.Wrapper = styled_components_1.default.a `
  text-decoration: none;
`;
