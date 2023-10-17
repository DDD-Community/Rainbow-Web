/* eslint-disable */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState, useRecoilValue } from "recoil";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { birthDateState, checkingState, nickNameState } from "@/src/recoil/user.atoms";

const yearRegex = /^[0-9]{4}$/;
const monthRegex = /^[0-9]{1,2}$/;
const dateRegex = /^[0-9]{1,2}$/;

export default function Birth() {
  const router = useRouter();

  const [birth, setBirth] = useRecoilState(birthDateState);
  const nicknameValue = useRecoilValue(nickNameState);

  const [year, setYear] = useState<string>(birth ? birth.split("-")[0] : "");
  const [month, setMonth] = useState<string>(birth ? birth.split("-")[1] : "");
  const [date, setDate] = useState<string>(birth ? birth.split("-")[2] : "");

  const checkingValue = useRecoilValue(checkingState);

  const isActive = yearRegex.test(year) && monthRegex.test(month) && dateRegex.test(date);

  const handleNextButton = () => {
    const yearNum = parseInt(year, 10);
    const monthNum = parseInt(month, 10);
    const dateNum = parseInt(date, 10);

    const birthDate = new Date(yearNum, monthNum - 1, dateNum + 1);
    const formattedBirthDate = birthDate.toISOString().split("T")[0];

    setBirth(formattedBirthDate);

    router.push(`/onboarding/${checkingValue ? "checking" : "salary"}`);
  };

  const handleChangeYear = (e: React.ChangeEvent<HTMLInputElement>) => setYear(e.target.value);
  const handleChangeMonth = (e: React.ChangeEvent<HTMLInputElement>) => setMonth(e.target.value);
  const handleChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value);

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="h-full min-h-[300px] pt-20">
        <div className="flex flex-col gap-[44px]">
          <div className="flex flex-col gap-2">
            <span className="sb-25-600">🥳</span>
            <p className="sb-25-600 text-gray-700 leading-[130%]">
              {nicknameValue}님의 <br />
              생일을 입력해주세요
            </p>
          </div>

          <div className="flex gap-2.5">
            <div className="relative w-full h-[52px]">
              <input
                type="text"
                id="year"
                value={year}
                onChange={handleChangeYear}
                className="w-full h-full px-4 py-[15px] border border-gray-200 rounded-[10px] r-16-400 text-gray-700 focus:border-primary-default focus:shadow-[0_0_0_4px_rgba(255,91,41,0.1)]"
                maxLength={4}
                placeholder="1995"
              />
              <label
                htmlFor="year"
                className="absolute right-[16px] top-1/2 translate-y-[-50%] m-16-500 text-primary-default"
              >
                년
              </label>
            </div>

            <div className="relative w-full h-[52px]">
              <input
                type="text"
                id="month"
                value={month}
                onChange={handleChangeMonth}
                className="w-full h-full px-4 py-[15px] border border-gray-200 rounded-[10px] r-16-400 text-gray-700 focus:border-primary-default focus:shadow-[0_0_0_4px_rgba(255,91,41,0.1)]"
                maxLength={2}
                placeholder="2"
              />
              <label
                htmlFor="month"
                className="absolute right-[16px] top-1/2 translate-y-[-50%] m-16-500 text-primary-default"
              >
                월
              </label>
            </div>

            <div className="relative w-full h-[52px]">
              <input
                type="text"
                id="date"
                value={date}
                onChange={handleChangeDate}
                className="w-full h-full px-4 py-[15px] border border-gray-200 rounded-[10px] r-16-400 text-gray-700 focus:border-primary-default focus:shadow-[0_0_0_4px_rgba(255,91,41,0.1)]"
                maxLength={2}
                placeholder="20"
              />
              <label
                htmlFor="date"
                className="absolute right-[16px] top-1/2 translate-y-[-50%] m-16-500 text-primary-default"
              >
                일
              </label>
            </div>
          </div>
        </div>
      </div>

      <ButtonField className="py-0">
        <PrimaryButton color="default" size="small" disabled={!isActive} onClick={handleNextButton}>
          확인
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}
