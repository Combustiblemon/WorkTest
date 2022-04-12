import { ButtonStyled } from "./Button.styles";
import React from "react";

interface PropType {
  text: string
  theme: "primary" | "extras"
  size: "small" | "big"
  type?: "button" | "submit" | "reset"
  expands?: boolean
  callback?: (index: any) => void
}

const Button = ({
  type = "button",
  text,
  size = "small",
  theme = "primary",
  expands = false,
  callback
}: PropType): JSX.Element => {
  return <ButtonStyled
            type={type}
            theme={theme}
            size={size}
            expands={expands}
            onClick={callback}
          >
            {text}
          </ButtonStyled>;
    };

export default Button;
