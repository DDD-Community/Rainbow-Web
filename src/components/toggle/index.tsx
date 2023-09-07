"use client";

import React from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

interface CheckboxProps {
  isChecked: boolean;
  labelText?: string;
  onClick: () => void;
}

function Toggle({ isChecked = true, labelText = "", onClick = () => {} }: CheckboxProps) {
  return (
    <button type="button" className="flex items-center gap-2" onClick={onClick}>
      <div
        className={twMerge(
          "relative cursor-pointer w-[42px] h-6 rounded-[30px] bg-gray-300",
          isChecked && "bg-primary-default"
        )}
      >
        <div
          className={twMerge(
            "absolute top-1/2 left-[3px] translate-y-[-50%] duration-500 w-[18px] h-[18px] rounded-[50%] bg-white",
            isChecked && "left-[21px] duration-500"
          )}
        />
      </div>
      {labelText && <span className="text-gray-700 sb-14-600">{labelText}</span>}
    </button>
  );
}
export default Toggle;
