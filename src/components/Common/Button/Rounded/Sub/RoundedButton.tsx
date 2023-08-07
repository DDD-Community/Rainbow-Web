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
  hover: "text-gray-600 bg-gray-500",
  default: "text-gray-600 bg-gray-50 ",
  disabled: "text-gray-300 bg-gray-100"
};

const sizes: Record<ButtonSize, string> = {
  large: "w-[80px] rounded-[30px]",
  small: "h-[62px] rounded-[30px]"
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
        "inline-flex flex-col items-center h-[32px] border-1px border-gray-500",
        "disabled:bg-gray-100 disabled:text-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
}
