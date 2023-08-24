"use client";

import React, { useState } from "react";
import NavigationBar from "src/components/navigationBar";
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
    <main className="py-3.5 px-4">
      <NavigationBar title="지출 금액" isBackButton onClickBackButton={() => {}} />

      <Section
        price={price}
        expenditureDetail="바나바나 바나나"
        onChangePrice={e => {
          handlePrice(e.target.value);
        }}
        onClickClear={() => setPrice("")}
        onClickAddPrice={handleAddPrice}
      />

      <Footer isActive={Number(price) > 0} onClick={() => {}} />
    </main>
  );
}
