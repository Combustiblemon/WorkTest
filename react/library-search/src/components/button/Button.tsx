import { ButtonStyled } from "./Button.styles";
import React from "react";

interface PropType {
  text: string
  theme: "primary"
  size: "small" | "big"
  type?: "button" | "submit" | "reset"
  border?: boolean
  expands?: boolean
  callback?: (index: any) => void
}

const Button = ({
  type = "button",
  text,
  size = "small",
  theme = "primary",
  expands = false,
  border,
  callback
}: PropType): JSX.Element => {
  return <ButtonStyled
            type={type}
            btnTheme={theme}
            size={size}
            expands={expands}
            onClick={callback}
            border={border}
          >
            {text}
          </ButtonStyled>;
    };

export default Button;
