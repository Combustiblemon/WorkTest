import { ExtrasContainerStyle, Wrapper } from "./ExtrasList.styles";
import Button from "../button/Button";
import React from "react";
import {ExtraType} from '../../types';

interface PropType {
  extras: ExtraType[]
}

const ExtrasList = ({ extras }: PropType): JSX.Element => {

  return (
    <ExtrasContainerStyle>
      {extras.map((item) => {
        return (
          <Wrapper href={item.url}>
            <Button text={item.name} theme="extras" size="small"/>
          </Wrapper>
        );
      })}
    </ExtrasContainerStyle>
  );
};

export default ExtrasList;