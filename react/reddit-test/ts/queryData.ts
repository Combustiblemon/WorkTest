import { CommunityType, ExtraType } from "./types";

export const queryCommunityData = async (): Promise<CommunityType[]> => {
    const spreadsheetId = "156IPxS8Pnyq-wovWccXPZtCealoJ1I74DWc4RBbnsyY";
    const response = await fetch(
      `https://api.graphqlsheet.com/api/${spreadsheetId}`,
      {
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
      }
    );
    const responseJSON = await response.json();
    // responseJSON.data.extras = ["Top", "Near You", "News", "Sports"];
    return responseJSON.data.get.map((item: any) => {
      return {
        ...item,
        url: `https://www.reddit.com/${item.name}/`
      }
    });
  };

export const queryExtrasData = async (): Promise<ExtraType[]> => {
    const spreadsheetId = '1FYkh-unVgen4R-UOzK8pGGpCRby-6e-HL7oC_cpnKQg';
    const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
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
    const responseJSON = await response.json();
    return responseJSON.data.get.map((item: any) => {
      return {
        ...item,
        url: `https://www.reddit.com/subreddits/leaderboard/${item.url}/`
      }
    });
};


const queryData = async (): Promise<[CommunityType[], ExtraType[]]> => {

  const promise1 = queryCommunityData();
  const promise2 = queryExtrasData();
  return await Promise.all([promise1, promise2]);

}

export default queryData;

export const staticData = {
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
}