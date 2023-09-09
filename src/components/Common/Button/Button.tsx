import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean;
  children: ReactNode;
};

export function Button({ disabled, className, children, ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(
        "flex-center items-center ring-1 ring-gray-50 rounded-[30px] px-3 py-[7.5px]",
        "m-12-500 text-gray-600 border-gray-500 bg-white",
        className
      )}
    >
      {children}
    </button>
  );
}
