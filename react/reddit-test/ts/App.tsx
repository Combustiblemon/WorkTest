import { Wrapper } from "./styles";
import Card from "./components/card/Card";
import React, { useEffect, useState } from "react";
import queryData, { staticData } from "./queryData";
import { CommunityType, ExtraType } from "./types";


const background = [
  "https://styles.redditmedia.com/t5_2rfxx/styles/bannerBackgroundImage_nh1y23r024r81.jpg?format=pjpg&s=a6d1a85e9e356c1665487f2710c21c28cc0d2245",
  "https://www.redditstatic.com/desktop2x/img/leaderboard/banner-background.png"
]

export default function App(): JSX.Element {
  const [communities, setCommunities] = useState<CommunityType[]>([]);
  const [extras, setExtras] = useState<ExtraType[]>([]);

  useEffect(() => {
    const getData = async () =>{
      // const res = await queryData();
      // console.log(res);
      // setCommunities(res[0]);
      // setExtras(res[1]);
      setCommunities(staticData.communities);
      setExtras(staticData.extras);
    }

    try{
      getData();
    }catch(e){
      console.log(e);
    }
  }, [])



  return (
    <Wrapper>
      <img src="/example.png" alt="example" height={"433px"}/>
      <Card
        backgroundURL={background[0]}
        title="Top  Gaming  Communities"
        communities={communities}
        extras={extras}
      />
    </Wrapper>
  );
}
