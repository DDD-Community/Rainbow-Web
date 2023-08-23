"use client";

import React, { useState, useEffect, useRef } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  options: Option[];
  onChange: (combinedValue: string) => void;
}

export function SelectEmail({ options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState<string | undefined>(undefined);
  const [selectedValue, setSelectedValue] = useState<string | undefined>("@선택");
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleInput = (e: any) => {
    setInput(e.target.value);
  };

  const handleOptionSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    const combinedValue = `${input} ${value}`;
    onChange(combinedValue);
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
    <div className={twMerge("relative inline-block w-full")} ref={selectRef}>
      <div
        className={twMerge(
          "flex justify-between",
          "ring-gray-200 ring-1 w-full rounded-[6px] p-2",
          "r-16-400",
          "focus-within:ring-primary-default"
        )}
      >
        <input
          className="focus:outline-none"
          type="input"
          onChange={handleInput}
          placeholder="이메일"
        />
        <button
          type="button"
          className={twMerge("flex flex-start", "text-primary-default m-16-500")}
          onClick={handleToggle}
        >
          {selectedValue}
        </button>
      </div>
      {isOpen && (
        <div className="w-full max-h-[276px] rounded-[10px] bg-white p-1.5 space-between ring-1 ring-gray-300 overflow-auto">
          <ul>
            {options.map(option => (
              <button
                type="button"
                key={option.value}
                className={`w-full flex flex-col items-start px-5 py-2.5 r-16-400 rounded-[10px] text-gray-700 hover:bg-gray-50 ${
                  option.value === selectedValue ? "bg-gray-50 " : ""
                }`}
                onClick={() => handleOptionSelect(option.value)}
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
