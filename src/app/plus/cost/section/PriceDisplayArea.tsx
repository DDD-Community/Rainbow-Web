"use client";

import React from "react";
import { addCommasToNumber } from "src/types/utils/utils";

export interface PriceDisplayAreaProps {
  price: string;
  onChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function PriceDisplayArea({
  price = "",
  onChangePrice = () => {}
}: PriceDisplayAreaProps) {
  const isZeroPrice = price === "" || price === "0";

  return (
    <div className="flex justify-center items-center gap-0.5">
      <input
        value={price}
        className="absolute w-80 text-right m-34-500 outline-0 placeholder:text-gray-300 opacity-0"
        placeholder="0"
        maxLength={10}
        onChange={onChangePrice}
      />
      <span
        className={`m-34-500 leading-[130%] ${isZeroPrice ? "text-gray-300" : "text-gray-700"}`}
      >
        {addCommasToNumber(isZeroPrice ? 0 : Number(price))}
      </span>
      <span className="leading-[130%] m-30-500">원</span>
    </div>
  );
}
