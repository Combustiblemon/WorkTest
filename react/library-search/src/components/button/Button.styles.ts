import styled from "styled-components";
import {black,  gray, lighterOrange, lightOrange} from "../../colors";
// import { Size, Color } from "./Button.types"

//size changes both font and  padding

const ButtonTheme = {
  primary: {
    padding: 12,
    bgColor: gray,
    textColor: black,
    hoverColor: lighterOrange,
    activeColor: lightOrange,
    border: `2px solid ${black}`,
    borderRadius: 6
  }
}

const ButtonSize = {
  small: {
    font: 11
  },
  big: {
    font: 14
  }
}

export const ButtonStyled = styled.button<{
    btnTheme: "primary",
    size: "small" | "big",
    expands?: boolean
    border?: boolean
  }>`
    margin: 0px;
    padding-right: ${props => ButtonTheme[props.btnTheme].padding}px;
    padding-left: ${props => ButtonTheme[props.btnTheme].padding}px;
    padding-bottom: 3px;
    background-color: ${props => ButtonTheme[props.btnTheme].bgColor};
    color: ${props => ButtonTheme[props.btnTheme].textColor};
    border: ${props => props.border ? ButtonTheme[props.btnTheme].border : "none"};
    border-radius: ${props => ButtonTheme[props.btnTheme].borderRadius}px;
    ${props => props.expands && "width: 100%;"  };
    cursor: pointer;


    font-family: 'Noto Sans', Arial, sans-serif;
    font-weight: 700;
    font-size: ${props => ButtonSize[props.size].font}px;
    /* opacity: 1; */


    :hover {
      background-color: ${props => ButtonTheme[props.btnTheme].hoverColor};
    }

    :active{
      background-color: ${props => ButtonTheme[props.btnTheme].activeColor};
    }
`;