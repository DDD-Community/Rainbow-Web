"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { twMerge } from "@/src/types/utils/tailwind.util";
import { salaryState } from "@/src/recoil/user.atoms";

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  options: Option[];
  onChange: (selectedValue: string) => void;
}

export function SelectSalary({ options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedName, setSelectedName] = useRecoilState(salaryState);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (name: string) => {
    setSelectedName(name);
    onChange(name);
    setIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        type="button"
        className={twMerge(
          "flex justify-between w-full px-4 py-3.5 border border-gray-200 rounded-[10px]",
          "r-16-400 text-left",
          selectedName ? "text-gray-700" : "text-gray-500",
          "focus-within:ring-primary-default",
          isOpen && "border-primary-default shadow-[0_0_0_4px_rgba(255,91,41,0.1)]"
        )}
        onClick={handleToggle}
      >
        {selectedName || "해당하는 범위를 선택해주세요"}
        <span className="m-16-500 text-primary-default">만원</span>
      </button>

      {isOpen && (
        <div className="absolute top-[56px] w-full max-h-[276px] rounded-[10px] bg-white p-1.5 space-between ring-1 ring-gray-300 overflow-auto">
          <ul>
            {options.map(option => (
              <button
                type="button"
                key={option.value}
                className={`w-full flex flex-col items-start px-4 py-3 r-16-400 rounded-[10px] text-gray-700 hover:bg-gray-50 ${
                  option.name === selectedName ? "bg-gray-50 " : ""
                }`}
                onClick={() => handleOptionSelect(option.name)}
              >
                {option.name}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
