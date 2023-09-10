"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import NavigationBar from "@/src/components/navigationBar";
import { DividerHorizon } from "@/src/components/Common/Divider";
import { PrimaryButton } from "src/components/Common/Button";
import { CategoryImage, CategoryType } from "src/components/categoryCard";
import Toggle from "@/src/components/toggle";

const categoryTypes: CategoryType[] = [
  "hand-heart",
  "book",
  "bus",
  "ticket",
  "medical",
  "daily-necessity",
  "food",
  "health",
  "drink",
  "clothes",
  "home",
  "phone",
  "others"
];

export default function PlusAddCategoryPage() {
  const router = useRouter();
  // categories type 나중에 수정 예정(임시로 string 설정 후 title 설정되게 해놓음)
  // const [categories, setCategories] = useState<string[]>([]);

  const [categoryValue, setCategoryValue] = useState("");
  const [isSelectedCategoryType, setIsSelectedCategoryType] = useState("");
  const [isExpenseVisibility, setIsExpenseVisibility] = useState(true);

  const handleClickCategory = (categoryType: CategoryType) => {
    const tempCategoryType =
      isSelectedCategoryType.length && isSelectedCategoryType === categoryType ? "" : categoryType;
    setIsSelectedCategoryType(tempCategoryType);
  };

  const isButtonActive = isSelectedCategoryType && categoryValue;

  return (
    <main className="pt-3.5">
      <NavigationBar
        isCloseButton
        title="카테고리 추가"
        onClickCloseButton={() => router.replace("/plus/category")}
      />
      <section className="px-4">
        <div className="mt-[60px] mb-[30px]">
          <textarea
            value={categoryValue}
            className="w-full h-8 min-h-[40px] sb-25-600 outline-0 text-center resize-none placeholder:text-gray-400"
            placeholder="카테고리를 작성해주세요"
            maxLength={12}
            onChange={e => setCategoryValue(e.target.value)}
          />
          <div className="mt-4">
            <DividerHorizon />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 w-full">
          {categoryTypes.map((categoryType: CategoryType) => {
            const isOpacity = !!(
              isSelectedCategoryType.length && isSelectedCategoryType !== categoryType
            );

            return (
              <button
                type="button"
                key={categoryType}
                className={isOpacity ? "opacity-30" : ""}
                onClick={() => handleClickCategory(categoryType)}
              >
                <CategoryImage
                  width="w-[94px]"
                  height="h-[94px]"
                  // width={"w-[100px]"}
                  // height={"h-[100px]"}
                  categoryType={categoryType}
                />
              </button>
            );
          })}
        </div>
      </section>

      <footer className="sticky bottom-0 flex justify-between py-3 border-t border-black/[0.04] bg-white mt-6">
        <div className="flex items-center">
          <Toggle
            isChecked={isExpenseVisibility}
            labelText="지출 전체 공개"
            onClick={() => setIsExpenseVisibility(prev => !prev)}
          />
        </div>

        <PrimaryButton
          disabled={!isButtonActive}
          color={isButtonActive ? "default" : "disabled"}
          className="w-[141px] h-[46px]"
          onClick={() => isButtonActive && console.log("is Active")}
        >
          + 카테고리 추가
        </PrimaryButton>
      </footer>
    </main>
  );
}
