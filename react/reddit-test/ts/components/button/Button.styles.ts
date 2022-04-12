import styled from "styled-components";
import {blue, blueActive1, blueActive2, gray, lightBlue, lightBlueActive, white} from "../../colors";
// import { Size, Color } from "./Button.types"

//size changes both font and  padding

const ButtonTheme = {
  primary: {
    padding: "16px",
    bgColor: blue,
    textColor: white,
    hoverColor: blueActive1,
    activeColor: blueActive2
  },
  extras: {
    padding: "8px",
    bgColor: gray,
    textColor: blue,
    hoverColor: lightBlue,
    activeColor: lightBlueActive
  }
}

const ButtonSize = {
  small: {
    height: 25,
    font: 12
  },
  big: {
    height: 32,
    font: 14
  }
}

export const ButtonStyled = styled.button<{
    theme: "primary" | "extras",
    size: "small" | "big",
    expands?: boolean
  }>`
    margin: 0px;
    padding-right: ${props => ButtonTheme[props.theme].padding};
    padding-left: ${props => ButtonTheme[props.theme].padding};
    padding-bottom: 3px;
    background-color: ${props => ButtonTheme[props.theme].bgColor};
    color: ${props => ButtonTheme[props.theme].textColor};
    border: none;
    border-radius: 9999px;
    ${props => props.expands && "width: 100%;"  };
    height: ${props => ButtonSize[props.size].height}px;
    cursor: pointer;


    font-family: 'Noto Sans', Arial, sans-serif;
    font-weight: 700;
    font-size: ${props => ButtonSize[props.size].font}px;
    opacity: 1;


    :hover {
      background-color: ${props => ButtonTheme[props.theme].hoverColor};
    }

    :active{
      background-color: ${props => ButtonTheme[props.theme].activeColor};
    }
`;