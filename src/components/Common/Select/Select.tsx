"use client";

import React, { useState } from "react";

interface Option {
  value: string;
  name: string;
}

interface SelectProps {
  options: Option[];
  onChange: (selectedValue: string) => void;
}

export function Select({ options, onChange }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(options[0]?.value);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (value: string) => {
    setSelectedValue(value);
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="flex-col w-[331px] text-right m-16-500">
      <div>
        <button
          type="button"
          className="inline-flex justify-between text-primary-default"
          onClick={handleToggle}
        >
          {selectedValue}
        </button>
      </div>
      {isOpen && (
        <div className="w-full rounded-md bg-white ring-1 ring-gray-300 ">
          <ul className="py-1">
            {options.map(option => (
              <button
                type="button"
                key={option.value}
                className={`w-full flex flex-col items-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 ${
                  option.value === selectedValue ? "bg-gray-50" : ""
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
