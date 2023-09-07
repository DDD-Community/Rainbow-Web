"use client";

import React, { useState, useEffect, useRef } from "react";
import { SubButton } from "src/components/Common/Button";
import { addCommasToNumber } from "src/types/utils/utils";
import IconCircleX from "public/assets/images/icons/circleX";

interface ExpenditureDetailAreaProps {
  expenditureDetail: string;
}
interface PriceDisplayAreaProps {
  price: string;
  onChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickClear: () => void;
}
interface AddPriceOptionsProps {
  onClickAddPrice: (price: number) => void;
}

interface SectionProps
  extends PriceDisplayAreaProps,
    ExpenditureDetailAreaProps,
    AddPriceOptionsProps {}
export default function Section({
  price = "",
  expenditureDetail = "",
  onChangePrice = () => {},
  onClickClear = () => {},
  onClickAddPrice = () => {}
}: SectionProps) {
  return (
    <section className="mt-[90px]">
      <PriceDisplayArea price={price} onChangePrice={onChangePrice} onClickClear={onClickClear} />
      <ExpenditureDetailArea expenditureDetail={expenditureDetail} />

      <AddPriceOptions onClickAddPrice={onClickAddPrice} />
    </section>
  );
}

function AddPriceOptions({ onClickAddPrice = () => {} }: AddPriceOptionsProps) {
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

function ExpenditureDetailArea({ expenditureDetail = "" }: ExpenditureDetailAreaProps) {
  return (
    <div className="flex justify-center mt-1.5">
      <span className="m-13-500 text-gray-500">{expenditureDetail}</span>
    </div>
  );
}

function PriceDisplayArea({
  price = "",
  onChangePrice = () => {},
  onClickClear = () => {}
}: PriceDisplayAreaProps) {
  const span = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(22);

  useEffect(() => {
    if (span.current && span.current.offsetWidth !== 0) {
      setWidth(span.current.offsetWidth);
    }
  }, [price]);

  const isZeroPrice = price === "" || price === "0";

  return (
    <div className="flex justify-center items-center gap-0.5 mt-[90px]">
      <span ref={span} id="hide" className="absolute opacity-0 z-0 min-w-[22px] m-34-500">
        {isZeroPrice ? "" : addCommasToNumber(Number(price))}
      </span>
      <input
        style={{ width }}
        value={isZeroPrice ? "" : addCommasToNumber(Number(price))}
        className="z-10 max-w-[343px] text-right m-34-500 outline-0 placeholder:text-gray-300"
        placeholder="0"
        maxLength={12}
        onChange={onChangePrice}
      />
      <span className="leading-[130%] m-30-500">원</span>
      {price && (
        <button type="button" className="ml-0.5" onClick={onClickClear}>
          <IconCircleX width={18} height={18} fill="#8C9097" />
        </button>
      )}
    </div>
  );
}
