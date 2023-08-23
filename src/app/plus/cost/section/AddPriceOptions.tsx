"use client";

import React from "react";
import { SubButton } from "src/components/Common/Button";

export interface AddPriceOptionsProps {
  onClickAddPrice: (price: number) => void;
}
export default function AddPriceOptions({ onClickAddPrice = () => {} }: AddPriceOptionsProps) {
  return (
    <div className="flex justify-center gap-1.5 mt-6">
      <SubButton
        color="default"
        className="w-[56px] h-[28px] p-0 ring-0 text-[11px]"
        onClick={() => onClickAddPrice(1000)}
      >
        + 1천원
      </SubButton>
      <SubButton
        color="default"
        className="w-[56px] h-[28px] p-0 ring-0 text-[11px]"
        onClick={() => onClickAddPrice(10000)}
      >
        + 1만원
      </SubButton>
      <SubButton
        color="default"
        className="w-[56px] h-[28px] p-0 ring-0 text-[11px]"
        onClick={() => onClickAddPrice(30000)}
      >
        + 3만원
      </SubButton>
      <SubButton
        color="default"
        className="w-[56px] h-[28px] p-0 ring-0 text-[11px]"
        onClick={() => onClickAddPrice(50000)}
      >
        + 5만원
      </SubButton>
    </div>
  );
}
