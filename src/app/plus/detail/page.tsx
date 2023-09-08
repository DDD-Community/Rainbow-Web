"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import NavigationBar from "src/components/navigationBar";
import { expenseDetailState } from "src/recoil/plus.atoms";
import Section from "./section";
import Footer from "./footer";

export default function PageLayout() {
  const router = useRouter();

  const [expenseDetail, setExpenseDetail] = useRecoilState(expenseDetailState);
  const isConfirmButton = !!expenseDetail.length;

  return (
    <main className="py-3.5 px-4">
      <NavigationBar
        title="지출 내용"
        isCloseButton
        onClickCloseButton={() => router.replace("/main")}
      />
      <Section value={expenseDetail} onChange={e => setExpenseDetail(e.target.value)} />

      <Footer isActive={isConfirmButton} />
    </main>
  );
}
