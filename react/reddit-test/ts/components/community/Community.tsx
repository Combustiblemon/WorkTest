import { WrapperList, Icon, Position, Content, Link, PositionArrow } from "./Community.styles";
import React, { useEffect, useState } from "react";
import ButtonStyled from "../button/Button"

interface PropType {
    name: string
    position: number
    previousPosition: number
    logo: string
    link: string
    hasButton?: boolean
}

const icons ={
  UP: "⬆",
  DOWN: "⬇",
  NONE: ""
}

type PositionChangeType = "UP" | "DOWN" | "NONE"

const Community = ({name, position, hasButton, logo, previousPosition, link}: PropType): JSX.Element => {
  const [positionChange, setPositionChange] = useState<PositionChangeType>("NONE");

  useEffect(() => {
    if(previousPosition === position){
      setPositionChange("NONE");
    }else{
      previousPosition > position ? setPositionChange("UP") : setPositionChange("DOWN");
    }
  }, [position, previousPosition]);
  // if(name.length > 16){
  //   name = `${name.substring(0, 16)}...`
  // }

  return (
      <WrapperList>
          <Content href={link}>
            <Position>
              {position}
            </Position>
            <PositionArrow icon={positionChange}>
              {icons[positionChange]}
            </PositionArrow>
            <Icon src={logo}/>
            <Link>
              {name}
            </Link>
          </Content>
          {hasButton ? <ButtonStyled text="Join" theme="primary" size="small" /> : ""}
      </WrapperList>
  );
};

export default Community;
