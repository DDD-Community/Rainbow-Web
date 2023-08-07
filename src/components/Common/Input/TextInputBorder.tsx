"use client";

import { PropsWithChildren } from "react";

import { tw } from "@/src/types/utils/tailwind.util";

type TextInputBorderProps = {
  errorMessage?: string;
  className?: string;
  disabled?: boolean;
};

export function TextInputBorder({
  errorMessage,
  disabled,
  children,
  className
}: PropsWithChildren<TextInputBorderProps>) {
  const errorCss =
    errorMessage && "border-[1px] border-primary-default focus-within:border-primary-default";
  const disabledCss = disabled && "cursor-not-allowed";
  return (
    <>
      <div
        className={tw(
          "flex items-center",
          "md-2pxr w-full rounded-[6px] border-[0.5px] border-solid text-r-16-400",
          "focus-within:border-primary-default",
          errorCss,
          disabledCss,

          className
        )}
      >
        {children}
      </div>
      {errorMessage && <p className="text-primary-default">{errorMessage}</p>}
    </>
  );
}
