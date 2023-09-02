/* eslint-disable no-restricted-globals */

"use client";

import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { TextInput } from "@/src/components/Common/Input";
import { birthDateState, checkingState, nickNameState } from "@/src/recoil/user.atoms";

export default function Birth() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const [birth, setBirth] = useRecoilState(birthDateState);
  const nicknameValue = useRecoilValue(nickNameState);

  const checkingValue = useRecoilValue(checkingState);
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState(false);

  const isNumber = (value: any) => /^[0-9]*$/.test(value);

  useEffect(() => {
    if (birth) {
      const [savedYear, savedMonth, savedDate] = birth.split("-");
      setYear(savedYear);
      setMonth(savedMonth);
      setDate(savedDate);
    }
    if (!isNumber(year) || !isNumber(month) || !isNumber(date)) {
      setErrorMessage("년, 월, 일은 숫자로 입력해주세요.");
      setError(true);
    }
  }, [birth]);

  const handleNext = () => {
    const yearNum = parseInt(year, 10);
    const monthNum = parseInt(month, 10);
    const dateNum = parseInt(date, 10);

    const birthDate = new Date(yearNum, monthNum - 1, dateNum + 1);

    if (
      isNaN(yearNum) ||
      isNaN(monthNum) ||
      isNaN(dateNum) ||
      birthDate.getMonth() !== monthNum - 1
    ) {
      setErrorMessage("유효한 날짜를 입력해주세요.");
      setError(true);
      return;
    }

    const formattedBirthDate = birthDate.toISOString().split("T")[0];
    setBirth(formattedBirthDate);
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

  const canActiveNextButton = Boolean(!year || !month || !date || error);

  return (
    <div className="w-343 flex flex-col justify-center">
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
      {errorMessage && <div className="m-12-500 text-primary-default ">{errorMessage}</div>}
      <div>
        <ButtonField>
          {checkingValue ? (
            <Link href="/onboarding/checking" className="w-full flex justify-end">
              <PrimaryButton
                color="default"
                size="small"
                disabled={canActiveNextButton}
                onClick={handleNext}
              >
                확인
              </PrimaryButton>
            </Link>
          ) : (
            <Link href="/onboarding/salary" className="w-full flex justify-end">
              <PrimaryButton
                color="default"
                size="small"
                disabled={canActiveNextButton}
                onClick={handleNext}
              >
                확인
              </PrimaryButton>
            </Link>
          )}
        </ButtonField>
      </div>
    </div>
  );
}
