import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

type ButtonSize = "large" | "small";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: ButtonSize;
  disabled?: boolean;
  width?: string;
  children: ReactNode;
};

const sizes: Record<ButtonSize, string> = {
  large: "w-[79px]",
  small: "w-[61px]"
};

export function Button({ size, disabled, className, children, ...props }: ButtonProps) {
  const buttonSize = sizes[size];
  return (
    <button
      type="button"
      {...props}
      disabled={disabled}
      className={twMerge(
        buttonSize,
        "flex-center items-center ring-1 ring-gray-50 rounded-[30px] h-[32px]",
        "text-gray-600 border-gray-500 bg-gray-white m-12-500",
        className
      )}
    >
      {children}
    </button>
  );
}
