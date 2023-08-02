import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

type ButtonColor = "primary" | "secondary";
type ButtonSize = "small" | "medium" | "large" | "xLarge";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: ButtonSize;
  color: ButtonColor;
  disabled?: boolean;
  width?: string;
  children: ReactNode;
};

const colors: Record<ButtonColor, string> = {
  primary: "bg-grey-500 text-grey-700",
  secondary: "bg-grey-200 text-grey-700"
};

const sizes: Record<ButtonSize, string> = {
  small: "py-8pxr text-xs rounded-lg",
  medium: "py-13pxr text-sm rounded-xl",
  large: "py-16pxr text-base rounded-xl",
  xLarge: "py-17pxr text-[15px] rounded-xl"
};

export function Button({
  size,
  color,
  disabled = false,
  width = "w-full",
  className,
  children,
  ...props
}: ButtonProps) {
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
        width,
        "font-bold active:bg-grey-600 active:text-white disabled:bg-grey-100 disabled:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}
