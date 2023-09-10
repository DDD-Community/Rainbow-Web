"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import Link from "next/link";
import React, { useState } from "react";
import * as queryKeys from "@/src/queries/queryKeys";
import SearchBar from "src/components/searchBar";
import { SubButton } from "src/components/Common/Button";
import { RoundedButton } from "src/components/Common/Button/Rounded/Sub/RoundedButton";
import {
  TEXT_PUBLIC_SCOPE_OPEN,
  TEXT_PUBLIC_SCOPE_CLOSE,
  CategoryImage
} from "src/components/categoryCard";
import NoResult from "@/src/components/noResult";
import { expenseCategoryState } from "src/recoil/plus.atoms";
import { getCategories, CategoriesTypes } from "./getCategories";

export default function PlusCostPage() {
  const router = useRouter();
  // eslint-disable-next-line
  const [expenseCategory, setExpenseCategory] = useRecoilState(expenseCategoryState);
  const [searchValue, setSearchValue] = useState<string>("");

  const { data: categories } = useQuery({
    queryKey: queryKeys.PLUS_CATEGORIES,
    queryFn: getCategories
  });

  const handleClickCategory = (category: CategoriesTypes) => {
    setExpenseCategory(category);
    router.push("/plus/reg");
  };

  return (
    <main className="py-3.5 px-4">
      <SearchBar
        value={searchValue}
        placeholder="카테고리 검색"
        onChange={e => setSearchValue(e.target.value)}
      />

      <section>
        <CategoryHeader />

        {categories?.length ? (
          <CategoryList
            searchValue={searchValue}
            categories={categories}
            onClickCategory={handleClickCategory}
          />
        ) : (
          <NoCategories />
        )}
      </section>
    </main>
  );
}

function CategoryHeader() {
  return (
    <div className="flex items-center justify-between mt-5">
      <h1 className="sb-14-600">내 카테고리</h1>
      <Link href="/plus/category/reg" replace>
        <RoundedButton
          color="hover"
          className="w-[108px] h-8 p-0 text-[12px] ring-0 border border-black/[0.04]"
        >
          + 카테고리 추가
        </RoundedButton>
      </Link>
    </div>
  );
}

interface CategoryListProps {
  searchValue: string;
  categories: CategoriesTypes[];
  onClickCategory?: (category: CategoriesTypes) => void;
}
function CategoryList({
  searchValue = "",
  categories = [],
  onClickCategory = () => {}
}: CategoryListProps) {
  return (
    <div className="mt-1.5">
      {categories.map(category => {
        const {
          categoryId,
          customCategoryImage: categoryType,
          name: categoryName,
          status
        } = category;
        const isView = categoryName.trim().indexOf(searchValue.trim()) >= 0;

        return (
          isView && (
            <article key={categoryId} className="flex justify-between items-center gap-2.5 py-2">
              <div className="flex gap-2.5">
                <div>
                  <CategoryImage categoryType={categoryType} />
                </div>
                <div className="flex flex-col justify-center gap-0.5">
                  <span className="sb-13-600">{categoryName}</span>
                  <span className="m-11-500 text-gray-500">
                    {status ? TEXT_PUBLIC_SCOPE_OPEN : TEXT_PUBLIC_SCOPE_CLOSE}
                  </span>
                </div>
              </div>
              <SubButton
                color="default"
                className="w-[41px] h-7 p-0 ring-0"
                onClick={() => onClickCategory(category)}
              >
                선택
              </SubButton>
            </article>
          )
        );
      })}
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
