"use client";

import { PropsWithChildren } from "react";

import { tw } from "@/src/types/utils/tailwind.util";

type TextInputBorderProps = {
  infoMessage?: string;
  placeholder?: string;
  className?: string;
};

export function TextInputBorder({
  infoMessage,
  placeholder,
  children,
  className
}: PropsWithChildren<TextInputBorderProps>) {
  const infoCss = infoMessage && "border-[1px]";
  return (
    <>
      <div
        className={tw(
          "flex flex-col items-center",
          "mt-2pxr w-full rounded-[6px] border-[0.5px] border-solid px-12pxr py-14pxr text-b1",
          "focus-within:border-[1px] ",
          infoCss,

          className
        )}
      >
        {children}
      </div>
      {infoMessage && (
        <div className="mt-8pxr flex justify-between">
          {infoMessage && <p className="text-detail">{infoMessage}</p>}
          {placeholder && <p className="text-detail">{placeholder}</p>}
        </div>
      )}
    </>
  );
}
