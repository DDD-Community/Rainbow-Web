import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

type ButtonColor = "hover" | "default" | "disabled";
type ButtonSize = "large" | "small";

export type RoundedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: ButtonSize;
  color: ButtonColor;
  disabled?: boolean;
  width?: string;
  children: ReactNode;
};

const colors: Record<ButtonColor, string> = {
  hover: "text-gray-600 bg-gray-200",
  default: "text-gray-600 bg-gray-50 ",
  disabled: "text-gray-300 bg-gray-100"
};

const sizes: Record<ButtonSize, string> = {
  large: "w-[80px]",
  small: "h-[62px]"
};

export function RoundedButton({
  size,
  color,
  disabled,
  className,
  children,
  ...props
}: RoundedButtonProps) {
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
        "flex-center items-center p-1 h-[32px] ring-1 ring-gray-500 rounded-[30px]",
        "m-12-500",
        "disabled:bg-gray-100 disabled:text-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
}
