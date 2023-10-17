import React from "react";
import IconExclamationMark from "@/public/assets/images/icons/exclamationMark";

interface InformationProps {
  children: string;
}

export function Information({ children }: InformationProps) {
  return (
    <div className="flex justify-center items-center gap-1.5 h-[44px] w-full bg-gray-50 rounded-[10px] w-full border border-black/[0.03]">
      <IconExclamationMark />

      <p className="m-12-500 text-gray-600">{children}</p>
    </div>
  );
}
