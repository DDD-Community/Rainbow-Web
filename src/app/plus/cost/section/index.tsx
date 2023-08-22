"use client";

import React from "react";
import { SubButton } from "src/components/Common/Button";
import { addCommasToNumber } from "src/types/utils/utils";

interface SectionProps {
  price: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAddPrice: (price: number) => void;
}
export default function Section({
  price = "",
  onChange = () => {},
  onClickAddPrice = () => {}
}: SectionProps) {
  const isZeroPrice = price === "" || price === "0";

  console.log(price);
  return (
    <section className="mt-[90px]">
      <div className="flex justify-center items-center gap-0.5">
        <input
          value={price}
          className="absolute w-80 text-right m-34-500 outline-0 placeholder:text-gray-300 opacity-0"
          placeholder="0"
          maxLength={10}
          onChange={onChange}
        />
        <span
          className={`m-34-500 leading-[130%] ${isZeroPrice ? "text-gray-300" : "text-gray-700"}`}
        >
          {addCommasToNumber(isZeroPrice ? 0 : Number(price))}
        </span>
        <span className="leading-[130%] m-30-500">원</span>
      </div>

      <div className="flex justify-center mt-1.5">
        <span className="m-13-500 text-gray-500">바나바나 바나나</span>
      </div>

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
    </section>
  );
}
