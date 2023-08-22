"use client";

import React from "react";

interface SectionProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export default function Section({ value = "", onChange = () => {} }: SectionProps) {
  return (
    <section className="mt-[90px]">
      <textarea
        value={value}
        className="w-full h-60 min-h-[40px] m-30-500 outline-0 text-center resize-none placeholder:text-gray-400"
        placeholder="지출 내용을 입력해주세요"
        maxLength={50}
        onChange={onChange}
      />
    </section>
  );
}
