"use client";

import React, { useState, useEffect } from "react";
import SearchBar from "src/components/searchBar";
import { SubButton } from "src/components/Common/Button";
import { RoundedButton } from "src/components/Common/Button/Rounded/Sub/RoundedButton";
import { CategoryImage } from "src/components/categoryCard";
import NoResult from "@/src/components/noResult";

export default function PlusCostPage() {
  // categories type 나중에 수정 예정(임시로 string 설정 후 title 설정되게 해놓음)
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setCategories(["category text", "category text"]);
  }, []);

  return (
    <div>
      <SearchBar value="" placeholder="카테고리 검색" onChange={() => {}} />

      <section>
        <CategoryHeader />

        {categories.length ? <CategoryList categories={categories} /> : <NoCategories />}
      </section>
    </div>
  );
}

function CategoryHeader() {
  return (
    <div className="flex items-center justify-between mt-5">
      <h1 className="sb-14-600">내 카테고리</h1>
      <RoundedButton
        color="hover"
        className="w-[108px] h-8 p-0 text-[12px] ring-0 border border-black/[0.04]"
      >
        + 카테고리 추가
      </RoundedButton>
    </div>
  );
}

interface CategoryListProps {
  categories: string[];
}
function CategoryList({ categories = [] }: CategoryListProps) {
  return (
    <div className="mt-1.5">
      {categories.map(category => (
        <article className="flex justify-between items-center gap-2.5 py-2">
          <div className="flex gap-2.5">
            <div>
              <CategoryImage categoryType="clothes" />
            </div>
            <div className="flex flex-col justify-center gap-0.5">
              <span className="sb-13-600">{category}</span>
              <span className="m-11-500 text-gray-500">전체 공개</span>
            </div>
          </div>
          <SubButton color="default" className="w-[41px] h-7 p-0 ring-0">
            선택
          </SubButton>
        </article>
      ))}
    </div>
  );
}

function NoCategories() {
  return (
    <div className="mt-5">
      <NoResult descriptions={["카테고리가 아직 없어요", "새로 추가해 주세요"]} />
    </div>
  );
}
