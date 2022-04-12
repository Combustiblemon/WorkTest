import styled from "styled-components";

export const colors = {
  blue: {
    rgb: "0, 121, 211",
    rgbText: "255, 255, 255",
    rgbaHover: "0, 121, 211, 0.8",
    rgbaActive: "0, 121, 211, 0.7",
    padding: "16px"
  },
  gray: {
    rgb: "246, 247, 248",
    rgbText: "0, 121, 211",
    rgbaHover: "0, 121, 211, 0.12",
    rgbaActive: "0, 121, 211, 0.22",
    padding: "8px"
  }
}

export const buttonSize = {
  small: "25px",
  big: "32px"
}

export const fontSize = {
  small: "12px",
  big: "14px"
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

`
