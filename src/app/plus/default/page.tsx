"use client";

import React, { useState } from "react";
import Header from "./header";
import Section from "./section";
import Footer from "./footer";

export default function PageLayout() {
  const [expenditureDetails, setExpenditureDetails] = useState("");
  const isConfirmButton = !!expenditureDetails.length;
  return (
    <div>
      <Header title="지출 내용" isCloseButton onClickCloseButton={() => {}} />
      <Section value={expenditureDetails} onChange={e => setExpenditureDetails(e.target.value)} />

      <Footer isActive={isConfirmButton} onClick={() => {}} />
    </div>
  );
}
