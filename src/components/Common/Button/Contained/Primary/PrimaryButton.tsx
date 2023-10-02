import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

type ButtonColor = "hover" | "default" | "disabled";
type ButtonSize = "large" | "small";

export type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: ButtonColor;
  disabled?: boolean;
  children: ReactNode;
  size: ButtonSize;
};

const sizes: Record<ButtonSize, string> = {
  large: "w-full",
  small: "w-[82px]"
};

const colors: Record<ButtonColor, string> = {
  hover: "bg-primary-hover text-white",
  default: "bg-primary-default text-white",
  disabled: "bg-primary-disabled text-white"
};

export function PrimaryButton({
  color,
  disabled,
  className,
  children,
  size,
  ...props
}: PrimaryButtonProps) {
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
        "flex-center items-center rounded-[8px] sb-16-600 py-3 px-3.5",
        "hover:bg-primary-hover hover:text-white",
        "active:bg-primary-default active:text-white",
        "disabled:bg-primary-disabled disabled:text-white",
        className
      )}
    >
      {children}
    </button>
  );
}
