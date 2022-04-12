"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_styles_1 = require("./Card.styles");
const List_1 = __importDefault(require("../list/List"));
const ExtrasList_1 = __importDefault(require("../extrasList/ExtrasList"));
const CardBottom_1 = __importDefault(require("../cardBottom/CardBottom"));
const react_1 = __importDefault(require("react"));
const Card = ({ backgroundURL, title, communities, extras }) => {
    return communities.length ? (react_1.default.createElement(Card_styles_1.CardStyle, null,
        react_1.default.createElement(Card_styles_1.CardTop, { backgroundURL: backgroundURL },
            react_1.default.createElement(Card_styles_1.Link, { href: "https://www.reddit.com/subreddits/leaderboard/" }, title)),
        react_1.default.createElement(List_1.default, { communities: communities }),
        react_1.default.createElement(CardBottom_1.default, { text: "View All", link: "https://www.reddit.com/subreddits/leaderboard" }),
        react_1.default.createElement(ExtrasList_1.default, { extras: extras }))) : react_1.default.createElement("div", null, "Loading...");
};
exports.default = Card;
