"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import { twMerge } from "@/src/types/utils/tailwind.util";
import { emailState } from "@/src/recoil/user.atoms";

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  options: Option[];
  onChange: (combinedValue: string) => void;
  errorMessage?: string;
}

export function SelectEmail({ options, onChange, errorMessage }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useRecoilState(emailState);
  const [selectedValue, setSelectedValue] = useState<string>("@선택");
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
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

  const errorCss =
    errorMessage && "border-[1px] border-primary-default focus-within:border-primary-default";
  return (
    <>
      <div className={twMerge("relative inline-block w-full", errorCss)} ref={selectRef}>
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
            value={input}
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
      {errorMessage && <p className="text-primary-default">{errorMessage}</p>}
    </>
  );
}
