"use client";

import React, { useState } from "react";
import NavigationBar from "src/components/navigationBar";
import Section from "./section";
import Footer from "./footer";

export default function PageLayout() {
  const [expenditureDetails, setExpenditureDetails] = useState("");
  const isConfirmButton = !!expenditureDetails.length;
  return (
    <main className="py-3.5 px-4">
      <NavigationBar title="지출 내용" isCloseButton onClickCloseButton={() => {}} />
      <Section value={expenditureDetails} onChange={e => setExpenditureDetails(e.target.value)} />

      <Footer isActive={isConfirmButton} onClick={() => {}} />
    </main>
  );
}
