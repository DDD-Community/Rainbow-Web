"use client";

import { HTMLAttributes, PropsWithChildren } from "react";

import { tw } from "@/src/types/utils/tailwind.util";

export function TextInputWrapper({
  className,
  children,
  ...rest
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={tw("flex w-full flex-col", className)} {...rest}>
      {children}
    </div>
  );
}
