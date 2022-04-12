"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const Card_1 = __importDefault(require("./components/card/Card"));
const react_1 = __importStar(require("react"));
const queryData_1 = require("./queryData");
const background = [
    "https://styles.redditmedia.com/t5_2rfxx/styles/bannerBackgroundImage_nh1y23r024r81.jpg?format=pjpg&s=a6d1a85e9e356c1665487f2710c21c28cc0d2245",
    "https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png"
];
function App() {
    const [communities, setCommunities] = (0, react_1.useState)([]);
    const [extras, setExtras] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const getData = () => __awaiter(this, void 0, void 0, function* () {
            // const res = await queryData();
            // console.log(res);
            // setCommunities(res[0]);
            // setExtras(res[1]);
            setCommunities(queryData_1.staticData.communities);
            setExtras(queryData_1.staticData.extras);
        });
        try {
            getData();
        }
        catch (e) {
            console.log(e);
        }
    }, []);
    return (react_1.default.createElement(styles_1.Wrapper, null,
        react_1.default.createElement("img", { src: "/example.png", alt: "example", height: "433px" }),
        react_1.default.createElement(Card_1.default, { backgroundURL: background[0], title: "Top  Gaming  Communities", communities: communities, extras: extras })));
}
exports.default = App;
