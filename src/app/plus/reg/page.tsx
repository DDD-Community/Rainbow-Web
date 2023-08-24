"use client";

import React, { useState, useEffect } from "react";
import NavigationBar from "src/components/navigationBar";
import { CategoryImage, CategoryType } from "src/components/categoryCard";
import { PrimaryButton, SubButton } from "src/components/Common/Button";
import { DividerHorizon } from "@/src/components/Common/Divider";
import IconPlus from "public/assets/images/icons/plus";
import { addCommasToNumber } from "src/types/utils/utils";

const SHOW_EXPENSE_VISIBILITY = "전체 공개";
const HIDE_EXPENSE_VISIBILITY = "비공개";

export default function PageLayout() {
  const [price, setPrice] = useState(0);
  const [memoValue, setMemoValue] = useState("");

  const isButtonActive = Number(price) > 0;

  useEffect(() => {
    setPrice(23000);
  }, []);

  return (
    <main className="py-3.5 px-4">
      <NavigationBar title="지출 등록" isBackButton onClickBackButton={() => {}} />

      <ExpensePrice price={23000} />

      <ExpenseDetail expenseDetail="바나바나 바나나" />

      <div className="mt-[30px] mb-3">
        <DividerHorizon />
      </div>

      <SelectedCategory categoryType="clothes" text="Category Text" />

      <button
        type="button"
        className="flex flex-col gap-1 justify-center items-center mt-3 w-full h-[150px] bg-gray-50 rounded-[10px] border border-black/[0.06]"
      >
        <IconPlus fill="#8C9097" />
        <span className="m-13-500 text-gray-500">사진 추가 (0/2)</span>
      </button>

      <Memo text={memoValue} onChangeText={e => setMemoValue(e.target.value)} />

      <footer className="flex mt-3">
        <PrimaryButton
          disabled={!isButtonActive}
          color={isButtonActive ? "default" : "disabled"}
          className="w-full h-[46px]"
          onClick={() => {}}
        >
          등록하기
        </PrimaryButton>
      </footer>
    </main>
  );
}

interface ExpensePriceProps {
  price: number;
}
function ExpensePrice({ price = 0 }: ExpensePriceProps) {
  return (
    <div className="flex justify-center items-center gap-0.5 mt-10">
      <span className="w-auto max-w-[343px] text-right m-34-500">{addCommasToNumber(price)}</span>
      <span className="leading-[130%] m-30-500">원</span>
    </div>
  );
}

interface ExpenseDetailProps {
  expenseDetail: string;
}
function ExpenseDetail({ expenseDetail = "" }: ExpenseDetailProps) {
  return (
    <div className="flex justify-center mt-1.5">
      <span className="m-13-500 text-gray-500">{expenseDetail}</span>
    </div>
  );
}

interface SelectedCategoryProps {
  categoryType: CategoryType;
  text: string;
  isExpenseVisibility?: boolean;
  onClick?: () => void;
}
function SelectedCategory({
  categoryType = "clothes",
  text = "",
  isExpenseVisibility = true,
  onClick = () => {}
}: SelectedCategoryProps) {
  return (
    <div className="flex justify-between items-center gap-2.5 py-2">
      <div className="flex gap-2.5">
        <div>
          <CategoryImage categoryType={categoryType} />
        </div>
        <div className="flex flex-col justify-center gap-0.5">
          <span className="sb-13-600">{text}</span>
          <span className="m-11-500 text-gray-500">
            {isExpenseVisibility ? SHOW_EXPENSE_VISIBILITY : HIDE_EXPENSE_VISIBILITY}
          </span>
        </div>
      </div>
      <SubButton color="default" className="w-[41px] h-7 p-0 ring-0" onClick={onClick}>
        수정
      </SubButton>
    </div>
  );
}

interface MemoProps {
  text: string;
  onChangeText: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
function Memo({ text = "", onChangeText = () => {} }: MemoProps) {
  return (
    <div className="relative mt-3">
      <textarea
        value={text}
        className="px-4 pt-[15px] pb-[37px] w-full h-[150px] r-16-400 bg-gray-50 rounded-[10px] border border-black/[0.06] resize-none"
        placeholder="메모를 여기에 작성"
        onChange={onChangeText}
        maxLength={50}
       />
      <span className="absolute right-4 bottom-[15px] r-14-400 text-gray-600">
        {text.length <= 50 ? text.length : 50}/50
      </span>
    </div>
  );
}
