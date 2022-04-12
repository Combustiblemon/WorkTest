import { CardBottomStyle } from "./CardBottom.styles";
import Button from "../button/Button";
import React from "react";

interface PropType {
  text: string
  link: string
}

const CardBottom = ({text, link}: PropType): JSX.Element => {
  return (
    <CardBottomStyle href={link}>
        <Button text={text} expands size="big" theme="primary"/>
    </CardBottomStyle>
  );
};

export default CardBottom;
