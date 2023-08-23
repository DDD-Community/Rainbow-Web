import React from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";
import { IconExclamationMark } from "@/public/assets/images/icons";

interface InformationProps {
  className?: string;
  children: string;
}

export function Information({ className, children }: InformationProps) {
  return (
    <div className={twMerge(className, "w-full flex justify-center items-center")}>
      <button
        type="button"
        className={twMerge(
          "flex justify-center items-center bg-gray-50 rounded-[10px] py-2 w-full border-[1px]",
          "m-12-500 text-gray-500"
        )}
      >
        {/* 색상변경은 어떻게 하는걸까? */}
        <div className="fill-gray-500 p-1.5">
          <IconExclamationMark />
        </div>
        {children}
      </button>
    </div>
  );
}
