"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { expenseDetailState, expensePriceState } from "src/recoil/plus.atoms";

export default function PlusPage({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const [expenseDetail] = useRecoilState(expenseDetailState);
  const [expensePrice] = useRecoilState(expensePriceState);

  useEffect(() => {
    if (isBlank(expenseDetail) || isBlank(expensePrice)) {
      router.push("/plus/detail");
    }
  }, []);

  return <div>{children}</div>;
}

const isBlank = (stateValue: string | number) => {
  if (stateValue === "") {
    return true;
  }
  if (stateValue === 0) {
    return true;
  }
  return false;
};
