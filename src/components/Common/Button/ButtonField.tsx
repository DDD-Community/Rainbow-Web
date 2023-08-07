import React, { ReactNode } from "react";

interface ButtonFieldProps {
  children: ReactNode;
}

export function ButtonField({ children }: ButtonFieldProps) {
  return <div className="flex flex-col items-end h-full w-full g-[10px]">{children}</div>;
}
