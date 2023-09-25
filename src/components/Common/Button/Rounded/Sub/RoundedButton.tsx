import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

type ButtonColor = "hover" | "default" | "disabled";
type ButtonSize = "large" | "small";

export type RoundedButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColor;
  disabled?: boolean;
  children: ReactNode;
  size: ButtonSize;
};

const sizes: Record<ButtonSize, string> = {
  large: "w-[80px]",
  small: "w-[62px]"
};

const colors: Record<ButtonColor, string> = {
  hover: "text-gray-600 bg-gray-200",
  default: "text-gray-600 bg-gray-50 ",
  disabled: "text-gray-300 bg-gray-100"
};

export function RoundedButton({
  color,
  disabled,
  className,
  children,
  size,
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
        "flex-center items-center ring-1 ring-gray-500 rounded-[30px] px-3 py-2.5",
        "m-12-500",
        "disabled:bg-gray-100 disabled:text-gray-300",
        className
      )}
    >
      {children}
    </button>
  );
}
