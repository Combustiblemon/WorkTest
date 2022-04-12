import React from "react";
// source: https://www.robinwieruch.de/react-dropdown/

export type OptionType = {
  value: string
  label: string
}
export interface DropDownPropsType {
  options: OptionType[],
  callback: (index: string) => void
}

const DropDown = ({ options, callback }: DropDownPropsType): JSX.Element => {
  return (
    <div>
      <select onChange={(e) => callback(e.target.value)}>
        {options.map((option: any, index: number) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
