import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

type ButtonColor = "hover" | "default" | "disabled";

export type SubButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColor;
  disabled?: boolean;
  children: ReactNode;
};

const colors: Record<ButtonColor, string> = {
  hover: "text-primary-default bg-primary-disabled ring-primary-default",
  default: "text-gray-600 bg-white border ring-gray-300",
  disabled: "text-gray-300 bg-gray-50 border ring-gray-300"
};

export function SubButton({ color, disabled, className, children, ...props }: SubButtonProps) {
  const buttonColor = colors[color];
  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(
        buttonColor,
        "flex-center items-center rounded-[6px] ring-1 m-12-500 px-2.5 py-2",
        "disabled:bg-gray-50 disabled:border-gray-300 disabled:text-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
}
