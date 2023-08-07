import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

type ButtonColor = "hover" | "default" | "disabled";
type ButtonSize = "large" | "small";

export type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: ButtonSize;
  color: ButtonColor;
  disabled?: boolean;
  width?: string;
  children: ReactNode;
};

const colors: Record<ButtonColor, string> = {
  hover: "bg-primary-hover text-white",
  default: "bg-primary-default text-white",
  disabled: "bg-primary-disabled text-white"
};

const sizes: Record<ButtonSize, string> = {
  large: "w-[104px] rounded-[8px]",
  small: "w-[82px] rounded-[8px]"
};

export function PrimaryButton({
  size,
  color,
  disabled,
  className,
  children,
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
        "flex-center items-center h-[46px]",
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
