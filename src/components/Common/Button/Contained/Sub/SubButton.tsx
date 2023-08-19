import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

type ButtonColor = "hover" | "default" | "disabled";
type ButtonSize = "large" | "small";

export type SubButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: ButtonSize;
  color: ButtonColor;
  disabled?: boolean;
  width?: string;
  children: ReactNode;
};

const colors: Record<ButtonColor, string> = {
  hover: "text-primary-default bg-primary-disabled ring-primary-default",
  default: "text-gray-600 bg-white border ring-gray-300",
  disabled: "text-gray-300 bg-gray-50 border ring-gray-300"
};

const sizes: Record<ButtonSize, string> = {
  large: "w-[75px] rounded-[6px]",
  small: "h-[57px] rounded-[6px]"
};

export function SubButton({
  size,
  color,
  disabled,
  className,
  children,
  ...props
}: SubButtonProps) {
  const buttonColor = colors[color];
  const buttonSize = sizes[size];
  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(
        buttonColor,
        buttonSize,
        "flex-center items-center h-[28px] ring-1 m-11-500",
        "disabled:bg-gray-50 disabled:border-gray-300 disabled:text-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
}
