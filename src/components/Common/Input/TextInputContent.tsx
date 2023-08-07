"use client";

import { forwardRef, InputHTMLAttributes } from "react";

import { ClassNameType } from "@/src/types/util";
import { tw } from "@/src/types/utils/tailwind.util";

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputClassName?: ClassNameType;
};

export const TextInputContent = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { inputClassName, name, placeholder, value, onChange, type = "text", disabled, ...rest },
    ref
  ) => {
    const disabledCss = disabled && "cursor-not-allowed";
    return (
      <input
        id={`text-input-${name}`}
        ref={ref}
        type={type}
        name={name}
        className={tw("w-full focus:outline-none rounded-[6px]", disabledCss, inputClassName)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        autoComplete="off"
        {...rest}
      />
    );
  }
);
