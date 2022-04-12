import Community from "../community/Community";
import React from "react";
import {CommunityType} from "../../types";

interface PropTypes {
  communities: CommunityType[]
}

const List = ({ communities }: PropTypes): JSX.Element => {
  return <>
      {communities.map((community: CommunityType) => {
        return(<Community
          key={community.name}
          logo={community.img}
          position={community.position}
          hasButton={community.join}
          name={community.name}
          previousPosition={community.previousPosition}
          link={community.url}
        />)
      })}
    </>;
};

export default List;
