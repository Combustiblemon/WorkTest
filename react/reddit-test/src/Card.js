"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const List_1 = __importDefault(require("./List"));
const ExtrasList_1 = __importDefault(require("./ExtrasList"));
const CardBottom_1 = __importDefault(require("./CardBottom"));
const react_1 = __importDefault(require("react"));
const Card = ({ backgroundURL, text, data }) => {
    return (react_1.default.createElement(styles_1.CardStyle, null,
        react_1.default.createElement(styles_1.CardTop, { backgroundURL: backgroundURL },
            react_1.default.createElement("p", null, text)),
        react_1.default.createElement(List_1.default, { data: data.get }),
        react_1.default.createElement(CardBottom_1.default, null, "View All"),
        react_1.default.createElement(ExtrasList_1.default, { extras: data.extras })));
};
exports.default = Card;
