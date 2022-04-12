import { CardStyle, CardTop, Link} from "./Card.styles";
import List from "../list/List";
import ExtrasList from "../extrasList/ExtrasList";
import CardBottom from "../cardBottom/CardBottom";
import React from "react";
import {CommunityType, ExtraType} from '../../types';

interface PropType {
  backgroundURL: string
  title: string
  communities: CommunityType[],
  extras: ExtraType[]

}


const Card = ({ backgroundURL, title, communities, extras }: PropType): JSX.Element => {
  return communities.length ? (
    <CardStyle>
      <CardTop backgroundURL={backgroundURL}>
        <Link href="https://www.reddit.com/subreddits/leaderboard/">
          {title}
        </Link>
      </CardTop>
      <List communities={communities} />
      <CardBottom text="View All" link="https://www.reddit.com/subreddits/leaderboard"/>
      <ExtrasList extras={extras} />
    </CardStyle>
  ): <div>Loading...</div>;
};

export default Card;
