"use client";

import React from "react";

type SizeTypes = "m" | "s";

interface CheckboxProps {
  size?: SizeTypes;
  id?: string;
  labelText?: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox({
  size = "m",
  labelText = "",
  id = "",
  isChecked = true,
  onChange = () => {}
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-1.5 w-full">
      <div
        className={`flex justify-center items-center ${
          size === "m" ? "w-[22px] h-[22px]" : "w-[18px] h-[18px]"
        }`}
      >
        <input
          type="checkbox"
          id={id || labelText}
          checked={isChecked}
          className={`${convertCheckboxColor(size, isChecked)} ${
            size === "m" ? "w-[18px] h-[18px]" : "w-[15px] h-[15px]"
          }`}
          onChange={onChange}
        />
      </div>
      <label
        htmlFor={id || labelText}
        className={`m-14-500 ${
          size === "m" && isChecked === true ? "text-gray-700" : "text-gray-600"
        } cursor-pointer`}
      >
        {labelText}
      </label>
    </div>
  );
}
export default Checkbox;

const convertCheckboxColor = (size: SizeTypes, isChecked: boolean) => {
  if (isChecked === false) {
    return "bg-gray-300";
  }
  if (size === "s") {
    return "bg-gray-600";
  }
  return "bg-primary-default";
};
