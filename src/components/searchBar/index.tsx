"use client";

import React from "react";
import IconSearch from "@/public/assets/images/icons/search";

const DEFAULT_PLACEHOLDER_TEXT = "닉네임으로 친구 찾기";

interface SearchBarProps {
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({
  placeholder = DEFAULT_PLACEHOLDER_TEXT,
  value = "",
  onChange = () => {}
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <div className="absolute top-2.5 left-3 w-[18px] h-[18px]">
        <IconSearch width={18} height={18} />
      </div>
      <input
        className="w-full h-[38px] pl-9 py-[9px] pr-3 rounded-[10px] border border-[#E9EAF0] m-14-500"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
export default SearchBar;
