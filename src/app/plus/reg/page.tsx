"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import React, { useState, useRef } from "react";
import NavigationBar from "src/components/navigationBar";
import { twMerge } from "@/src/types/utils/tailwind.util";
import {
  CategoryImage,
  CategoryType,
  TEXT_PUBLIC_SCOPE_OPEN,
  TEXT_PUBLIC_SCOPE_CLOSE
} from "src/components/categoryCard";
import { PrimaryButton, SubButton } from "src/components/Common/Button";
import { DividerHorizon } from "@/src/components/Common/Divider";
import IconPlus from "public/assets/images/icons/plus";
import { addCommasToNumber } from "src/types/utils/utils";
import { expenseDetailState, expensePriceState, expenseCategoryState } from "src/recoil/plus.atoms";
import IconXMark from "@/public/assets/images/icons/xMark";

export default function PageLayout() {
  const inputFile1Ref = useRef<HTMLInputElement>(null);
  const inputFile2Ref = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const [expenseDetail] = useRecoilState(expenseDetailState);
  const [expensePrice] = useRecoilState(expensePriceState);
  const [expenseCategory] = useRecoilState(expenseCategoryState);

  const [memoValue, setMemoValue] = useState("");

  const isButtonActive = Number(expensePrice) > 0;

  const [firstFileInputImage, setFirstFileInputImage] = useState<string>("");
  const [secondFileInputImage, setSecondFileInputImage] = useState<string>("");

  const handleChangeFileInput = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (index === 0) {
        setFirstFileInputImage(imageUrl);
      } else {
        setSecondFileInputImage(imageUrl);
      }
    }
  };

  const handleClickFileInputClearButton = (index: number) => {
    console.log(index);

    // 이미지 2개 중 왼쪽 이미지를 먼저 지울 경우
    if (index === 0 && secondFileInputImage !== "") {
      if (inputFile1Ref.current && inputFile2Ref.current) {
        inputFile1Ref.current.value = inputFile2Ref.current.value;
        inputFile2Ref.current.value = "";
      }

      setFirstFileInputImage(secondFileInputImage);
      setSecondFileInputImage("");
      return;
    }
    if (inputFile1Ref.current && inputFile2Ref.current) {
      if (index === 0) {
        setFirstFileInputImage("");
        inputFile1Ref.current.value = "";
      } else {
        setSecondFileInputImage("");
        inputFile2Ref.current.value = "";
      }
    }
  };

  return (
    <main className="py-3.5 px-4">
      <NavigationBar title="지출 등록" isBackButton onClickBackButton={() => router.back()} />

      <ExpensePrice price={Number(expensePrice)} />

      <ExpenseDetail expenseDetail={expenseDetail} />

      <div className="mt-[30px] mb-3">
        <DividerHorizon />
      </div>

      <SelectedCategory
        categoryType={expenseCategory.type}
        text={expenseCategory.name}
        isOpen={expenseCategory.isOpen}
      />

      <div className="flex w-full gap-2.5">
        <div className="relative flex flex-auto flex-col gap-1 justify-center items-center mt-3 w-full h-[150px] bg-gray-50 rounded-[10px] border border-black/[0.06] overflow-hidden">
          <input
            ref={inputFile1Ref}
            type="file"
            value=""
            accept="image/*"
            className="z-10 absolute w-full h-full border border-gray-500 opacity-0"
            onChange={e => handleChangeFileInput(e, 0)}
          />
          <IconPlus fill="#8C9097" />
          <span className="m-13-500 text-gray-500">사진 추가 (0/2)</span>

          <Image
            src={firstFileInputImage}
            width={300}
            height={150}
            className={twMerge(
              "absolute top-0 left-0 w-full h-full object-cover",
              firstFileInputImage === "" && "hidden"
            )}
            alt="first image clear button"
          />
          {firstFileInputImage && (
            <button
              type="button"
              className="z-20 absolute top-[11px] right-[11px] flex items-center justify-center w-[18px] h-[18px] bg-white rounded-[50%] cursor-pointer"
              onClick={() => handleClickFileInputClearButton(0)}
            >
              <IconXMark width={15} height={15} fill="#8C9097" />
            </button>
          )}
        </div>

        {firstFileInputImage && (
          <div className="relative flex flex-auto flex-col gap-1 justify-center items-center mt-3 w-full h-[150px] bg-gray-50 rounded-[10px] border border-black/[0.06] overflow-hidden">
            <input
              ref={inputFile2Ref}
              type="file"
              value=""
              accept="image/*"
              className="z-10 absolute w-full h-full border border-gray-500 opacity-0"
              onChange={e => handleChangeFileInput(e, 1)}
            />
            <IconPlus fill="#8C9097" />
            <span className="m-13-500 text-gray-500">사진 추가 (1/2)</span>

            <Image
              src={secondFileInputImage}
              width={300}
              height={150}
              className={twMerge(
                "absolute top-0 left-0 w-full h-full object-cover",
                secondFileInputImage === "" && "hidden"
              )}
              alt="second image clear button"
            />
            {secondFileInputImage && (
              <button
                type="button"
                className="z-20 absolute top-[11px] right-[11px] flex items-center justify-center w-[18px] h-[18px] bg-white rounded-[50%] cursor-pointer"
                onClick={() => handleClickFileInputClearButton(1)}
              >
                <IconXMark width={15} height={15} fill="#8C9097" />
              </button>
            )}
          </div>
        )}
      </div>

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
  isOpen?: boolean;
  onClick?: () => void;
}
function SelectedCategory({
  categoryType = "clothes",
  text = "",
  isOpen = true,
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
            {isOpen ? TEXT_PUBLIC_SCOPE_OPEN : TEXT_PUBLIC_SCOPE_CLOSE}
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
