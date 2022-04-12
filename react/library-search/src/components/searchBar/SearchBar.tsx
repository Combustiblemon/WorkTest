import React from "react";
import { Input } from "./SearchBar.styles";

const inputTypesList = [
    "button",
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "hidden",
    "image",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "reset",
    "search",
    "submit",
    "tel",
    "text",
    "time",
    "url",
    "week",
] as const

export type InputTypes = typeof inputTypesList[number]

export interface SearchBarPropsType {
    type: InputTypes
    placeholder?: string
    onChange?: (index?: any) => void
    onKeyDown?: (value?: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBar = ({ type, placeholder, onChange, onKeyDown}: SearchBarPropsType): JSX.Element => {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default SearchBar;
