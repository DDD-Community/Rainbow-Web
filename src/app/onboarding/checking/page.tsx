"use client";

import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import {
  emailState,
  nicknameState,
  genderState,
  birthDateState,
  salaryState,
  checkingState
} from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { Information } from "@/src/components/Information/Information";

export default function Checking() {
  const email = useRecoilValue(emailState);
  const nickname = useRecoilValue(nicknameState);
  const gender = useRecoilValue(genderState);
  const birthDate = useRecoilValue(birthDateState);
  const salary = useRecoilValue(salaryState);
  const setChecking = useSetRecoilState(checkingState);

  useEffect(() => {
    setChecking(true);
  }, []);

  const data = [
    { id: uuidv4(), label: "닉네임", value: nickname, link: "/onboarding/nickname" },
    { id: uuidv4(), label: "성별", value: gender, link: "/onboarding/gender" },
    { id: uuidv4(), label: "생일", value: birthDate, link: "/onboarding/birth" },
    { id: uuidv4(), label: "연봉", value: salary, link: "/onboarding/salary" }
  ];

  const handleNext = () => {
    const formData = {
      email,
      nickname,
      gender,
      birthDate,
      salary
    };
    console.log("제출 폼 데이터:", formData);
  };

  return (
    <div className="w-343 flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>👀</div>
        <div className="sb-25-600 text-gray-700">
          입력한 정보를 <br />
          한번 더 확인해주세요
        </div>
      </div>
      <div className="flex flex-col">
        {data.map(item => (
          <div className="flex justify-between " key={item.id}>
            <div className="text-primary-default r-14-400 p-2">{item.label}</div>
            <div className="text-gray-700 r-14-400 p-2">{item.value}</div>
            <Link href={item.link} className="text-gray-500 p-2">
              수정
            </Link>
          </div>
        ))}
      </div>
      <Information className="py-3">내 정보는 내 프로필에서 다시 수정할 수 있어요</Information>
      <ButtonField>
        <Link href="/member/onboarding/contract" className="w-full">
          <PrimaryButton color="default" size="small" onClick={handleNext}>
            확인
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
