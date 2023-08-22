"use client";

import React, { useState, useEffect, useRef } from "react";
import { twMerge } from "@/src/types/utils/tailwind.util";

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  options: Option[];
  text: string;
  onChange: (selectedValue: string) => void;
}

export function Select({ options, text, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(options[0]?.value);
  const [selectedName, setSelectedName] = useState<string | undefined>(options[0]?.name);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value: string, name: string) => {
    setSelectedValue(value);
    setSelectedName(name);
    onChange(value);
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
    <div className={twMerge("relative inline-block w-full")} ref={selectRef}>
      <div>
        <button
          type="button"
          className={twMerge(
            "ring-gray-200 ring-1 w-full rounded-[6px] p-2",
            "r-16-400",
            "focus-within:ring-primary-default"
          )}
          onClick={handleToggle}
        >
          <div className={twMerge("flex justify-between")}>
            {selectedName && <div className={twMerge("flex flex-start")}>{selectedName}</div>}
            {text && <div className={twMerge("text-right text-primary-default")}>{text}</div>}
          </div>
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
                onClick={() => handleOptionSelect(option.value, option.name)}
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
