import React from "react";
/**
 * 호은님이 tailwind-merge library 적용되어 있는 Branch 작업 및 Merge 후 tailwind-join method 적용 예정
 * tailwind-merge 적용 전 임시로 concat 적용
 */

const DEFAULT_COMMON_CLASS = "rounded-[40px] px-[8px] py-[3px] m-10-500 ";

interface TagProps {
  children: React.ReactNode;
}

export function PrimaryTag({ children }: TagProps) {
  return <span className={`${DEFAULT_COMMON_CLASS}bg-primary-default text-white`}>{children}</span>;
}

export function SecondaryTag({ children }: TagProps) {
  return (
    <span
      className={`${DEFAULT_COMMON_CLASS}bg-primary-bg-disabled border border-primary-bg text-primary-default`}
    >
      {children}
    </span>
  );
}

export function SubTag({ children }: TagProps) {
  return (
    <span className={`${DEFAULT_COMMON_CLASS}bg-gray-50 border border-gray-200 text-gray-600`}>
      {children}
    </span>
  );
}
