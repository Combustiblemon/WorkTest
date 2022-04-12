"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticData = exports.queryExtrasData = exports.queryCommunityData = void 0;
const queryCommunityData = () => __awaiter(void 0, void 0, void 0, function* () {
    const spreadsheetId = "156IPxS8Pnyq-wovWccXPZtCealoJ1I74DWc4RBbnsyY";
    const response = yield fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            token: "0c60179176037663fc845c4bf0cdf08d58cc2834"
        },
        body: JSON.stringify({
            query: `
          {
            get(limit: 20){
              img
              name
              position
              previousPosition
              join
            }
          }
        `
        })
    });
    const responseJSON = yield response.json();
    // responseJSON.data.extras = ["Top", "Near You", "News", "Sports"];
    return responseJSON.data.get.map((item) => {
        return Object.assign(Object.assign({}, item), { url: `https://www.reddit.com/${item.name}/` });
    });
});
exports.queryCommunityData = queryCommunityData;
const queryExtrasData = () => __awaiter(void 0, void 0, void 0, function* () {
    const spreadsheetId = '1FYkh-unVgen4R-UOzK8pGGpCRby-6e-HL7oC_cpnKQg';
    const response = yield fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': '447e8a7b9bc029b286339736cfd523e97bad7742'
        },
        body: JSON.stringify({
            query: `
          {
            get(limit: 20) {
              name
              url
            }
          }
        `
        })
    });
    const responseJSON = yield response.json();
    return responseJSON.data.get.map((item) => {
        return Object.assign(Object.assign({}, item), { url: `https://www.reddit.com/subreddits/leaderboard/${item.url}/` });
    });
});
exports.queryExtrasData = queryExtrasData;
const queryData = () => __awaiter(void 0, void 0, void 0, function* () {
    const promise1 = (0, exports.queryCommunityData)();
    const promise2 = (0, exports.queryExtrasData)();
    return yield Promise.all([promise1, promise2]);
});
exports.default = queryData;
exports.staticData = {
    "communities": [
        {
            "img": "https://styles.redditmedia.com/t5_2rfxx/styles/communityIcon_9yj66cjf8oq61.png",
            "name": "r/leagueoflegends",
            "position": 1,
            "previousPosition": 1,
            "join": true,
            "url": "https://www.reddit.com/r/leagueoflegends/"
        },
        {
            "img": "https://styles.redditmedia.com/t5_2xrd1/styles/communityIcon_cs82063vomj81.png",
            "name": "r/gtaonline",
            "position": 2,
            "previousPosition": 3,
            "join": false,
            "url": "https://www.reddit.com/r/gtaonline/"
        },
        {
            "img": "https://styles.redditmedia.com/t5_3h47q/styles/communityIcon_tjhylhfxrhp01.jpg?format=pjpg&s=f5eca7dc43ddb9c5dd2c0ec5ce43e5cba6ad9f48",
            "name": "r/NintendoSwitch",
            "position": 3,
            "previousPosition": 2,
            "join": false,
            "url": "https://www.reddit.com/r/NintendoSwitch/"
        },
        {
            "img": "https://styles.redditmedia.com/t5_3f1s6/styles/communityIcon_o7l06dt55mk81.png",
            "name": "r/Breath_of_the_Wild",
            "position": 4,
            "previousPosition": 4,
            "join": true,
            "url": "https://www.reddit.com/r/Breath_of_the_Wild/"
        },
        {
            "img": "https://styles.redditmedia.com/t5_3bog8/styles/communityIcon_lk8opdrw12r81.jpg?format=pjpg&s=ac70951b3eb3fb5531165b87fabfc48824bb7b10",
            "name": "r/ClashRoyale",
            "position": 5,
            "previousPosition": 6,
            "join": true,
            "url": "https://www.reddit.com/r/ClashRoyale/"
        }
    ],
    "extras": [
        {
            "name": "Top",
            "url": "https://www.reddit.com/subreddits/leaderboard/top/"
        },
        {
            "name": "Near You",
            "url": "https://www.reddit.com/subreddits/leaderboard/near-you/"
        },
        {
            "name": "News",
            "url": "https://www.reddit.com/subreddits/leaderboard/news/"
        },
        {
            "name": "Sports",
            "url": "https://www.reddit.com/subreddits/leaderboard/sports/"
        }
    ]
};
