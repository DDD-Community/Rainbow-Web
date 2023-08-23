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
          "flex items-center gap-6 p-2",
          "w-full rounded-[6px] border-[1px] r-16-400",
          "focus-within:border-primary-default focus-within:border-[2px]",
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
