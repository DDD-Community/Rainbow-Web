"use client";

import React from "react";

import PriceDisplayArea, { PriceDisplayAreaProps } from "./PriceDisplayArea";
import ExpenditureDetailArea, { ExpenditureDetailAreaProps } from "./ExpenditureDetailArea";
import AddPriceOptions, { AddPriceOptionsProps } from "./AddPriceOptions";

interface SectionProps
  extends PriceDisplayAreaProps,
    ExpenditureDetailAreaProps,
    AddPriceOptionsProps {}
export default function Section({
  price = "",
  expenditureDetail = "",
  onChangePrice = () => {},
  onClickAddPrice = () => {}
}: SectionProps) {
  return (
    <section className="mt-[90px]">
      <PriceDisplayArea price={price} onChangePrice={onChangePrice} />
      <ExpenditureDetailArea expenditureDetail={expenditureDetail} />

      <AddPriceOptions onClickAddPrice={onClickAddPrice} />
    </section>
  );
}
