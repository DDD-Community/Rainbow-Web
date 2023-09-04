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
  const [email, setEmail] = useRecoilState(emailState);
  const atIndex = email.indexOf("@");
  const userEmail = atIndex !== -1 ? email.slice(0, atIndex) : "";
  const [input, setInput] = useState(userEmail);

  const emailType = atIndex !== -1 ? email.slice(atIndex) : "@선택";
  const [selectedValue, setSelectedValue] = useState<string>(emailType);

  const selectRef = useRef<HTMLDivElement | null>(null);
  const [errorKorean, setErrorKorean] = useState("");

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    setEmail(inputValue + selectedValue);
    if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(inputValue)) {
      setErrorKorean("이메일에는 한글을 사용할 수 없습니다.");
    } else {
      setErrorKorean("");
    }
  };

  const handleOptionSelect = (value: string) => {
    setSelectedValue(value);
    setEmail(input + value);
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

  const errorDuplicateCss =
    errorMessage && "border-[1px] border-primary-default focus-within:border-primary-default";
  const errorKoreanCss =
    errorKorean && "border-[1px] border-primary-default focus-within:border-primary-default";
  return (
    <>
      <div
        className={twMerge("relative inline-block w-full", errorDuplicateCss, errorKoreanCss)}
        ref={selectRef}
      >
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
      {errorMessage && <p className="m-12-500 text-primary-default">{errorMessage}</p>}
      {errorKorean && <p className="m-12-500 text-primary-default">{errorKorean}</p>}
    </>
  );
}
