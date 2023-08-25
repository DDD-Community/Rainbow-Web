"use client";

import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { TextInput } from "@/src/components/Common/Input";
import { birthDateState, nicknameState } from "@/src/recoil/user.atoms";

export default function Birth() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [birth, setBirth] = useRecoilState(birthDateState);
  const nicknameValue = useRecoilValue(nicknameState);

  useEffect(() => {
    if (birth) {
      const [savedYear, savedMonth, savedDate] = birth.split("-");
      setYear(savedYear);
      setMonth(savedMonth);
      setDate(savedDate);
    }
  }, [birth]);

  const handleNext = () => {
    const birthDate = `${year}-${month}-${date}`;
    setBirth(birthDate);
  };

  const getInputValue = (label: string) => {
    if (label === "년") return year;
    if (label === "월") return month;
    if (label === "일") return date;
    return "";
  };

  const setInputValue = (label: string, value: string) => {
    if (label === "년") setYear(value);
    else if (label === "월") setMonth(value);
    else if (label === "일") setDate(value);
  };

  const canActiveNextButton = Boolean(!year || !month || !date);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>🥳</div>
        <div className="sb-25-600 text-gray-700">
          {nicknameValue}님의 <br />
          생일을 입력해주세요
        </div>
      </div>
      <div className="flex gap-4">
        {["년", "월", "일"].map(label => (
          <TextInput key={label}>
            <TextInput.Border>
              <TextInput.Content
                value={getInputValue(label)}
                onChange={e => setInputValue(label, e.target.value)}
              />
              <div className="text-primary-default">{label}</div>
            </TextInput.Border>
          </TextInput>
        ))}
      </div>
      <div>
        <ButtonField>
          <Link href="/member/onboarding/salary">
            <PrimaryButton
              color="default"
              size="small"
              disabled={canActiveNextButton}
              onClick={handleNext}
            >
              확인
            </PrimaryButton>
          </Link>
        </ButtonField>
      </div>
    </div>
  );
}
