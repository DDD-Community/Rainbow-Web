import React, { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonFieldProps {
  children: ReactNode;
  className?: string;
}

export function ButtonField({ className, children }: ButtonFieldProps) {
  return <div className={twMerge("flex justify-end w-full py-8", className)}>{children}</div>;
}
