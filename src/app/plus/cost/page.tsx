"use client";

import React, { useState } from "react";
import Header from "../header";
import Section from "./section";
import Footer from "./footer";

export default function PlusCostPage() {
  const [price, setPrice] = useState("");

  const handlePrice = (value: string) => {
    const replaceValue = value.replace(/[^\d]/g, "");

    if (Number(price) > 0 || Number(replaceValue) > 0) {
      setPrice(replaceValue);
    }
  };

  const handleAddPrice = (addPrice: number) => {
    const oldPrice = Number(price);
    setPrice(String(oldPrice + addPrice));
  };

  return (
    <div>
      <Header title="지출 금액" isBackButton onClickBackButton={() => {}} />

      <Section
        price={price}
        onChange={e => {
          handlePrice(e.target.value);
        }}
        onClickAddPrice={handleAddPrice}
      />

      <Footer isActive={Number(price) > 0} onClick={() => {}} />
    </div>
  );
}
