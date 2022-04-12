"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styles_1 = require("./styles");
const Card_1 = __importDefault(require("./Card"));
const data = {
    get: [
        {
            img: "https://styles.redditmedia.com/t5_2rfxx/styles/communityIcon_9yj66cjf8oq61.png",
            name: "r/leagueoflegends",
            position: 1,
            previousPosition: 2
        },
        {
            img: "https://styles.redditmedia.com/t5_2xrd1/styles/communityIcon_cs82063vomj81.png",
            name: "r/gtaonline",
            position: 2,
            previousPosition: 3
        },
        {
            img: "https://styles.redditmedia.com/t5_3h47q/styles/communityIcon_tjhylhfxrhp01.jpg?format=pjpg&s=f5eca7dc43ddb9c5dd2c0ec5ce43e5cba6ad9f48",
            name: "r/NintendoSwitch",
            position: 3,
            previousPosition: 4
        },
        {
            img: "https://styles.redditmedia.com/t5_3f1s6/styles/communityIcon_o7l06dt55mk81.png",
            name: "r/Breath_of_the_Wild",
            position: 4,
            previousPosition: 5
        },
        {
            img: "https://styles.redditmedia.com/t5_3bog8/styles/communityIcon_lk8opdrw12r81.jpg?format=pjpg&s=ac70951b3eb3fb5531165b87fabfc48824bb7b10",
            name: "r/ClashRoyale",
            position: 5,
            previousPosition: 6
        }
    ],
    extras: ["Top", "Near You", "News", "Sports"]
};
const background = "https://styles.redditmedia.com/t5_2rfxx/styles/bannerBackgroundImage_nh1y23r024r81.jpg?format=pjpg&s=a6d1a85e9e356c1665487f2710c21c28cc0d2245";
function App() {
    return (<styles_1.Wrapper>
      <h1>Reddit Example</h1>
      <Card_1.default backgroundURL={background} text="Top Gaming Communities" data={data}/>
    </styles_1.Wrapper>);
}
exports.default = App;
