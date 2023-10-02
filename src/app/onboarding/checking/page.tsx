"use client";

import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import {
  emailState,
  nickNameState,
  genderState,
  birthDateState,
  salaryState,
  checkingState,
  userFormState,
  kaKaoIdState
} from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { Information } from "@/src/components/Information/Information";
import { instance } from "@/src/api/auth/apis";

export default function Checking() {
  const email = useRecoilValue(emailState);
  const nickName = useRecoilValue(nickNameState);
  const gender = useRecoilValue(genderState);
  const birthDate = useRecoilValue(birthDateState);
  const salary = useRecoilValue(salaryState);
  const setChecking = useSetRecoilState(checkingState);
  const setUserForm = useSetRecoilState(userFormState);
  const kaKaoId = useRecoilValue(kaKaoIdState);

  useEffect(() => {
    setChecking(true);
  }, []);

  const data = [
    { id: uuidv4(), label: "닉네임", value: nickName, link: "/onboarding/nickname" },
    { id: uuidv4(), label: "성별", value: gender, link: "/onboarding/gender" },
    { id: uuidv4(), label: "생일", value: birthDate, link: "/onboarding/birth" },
    { id: uuidv4(), label: "연봉", value: salary, link: "/onboarding/salary" }
  ];

  const handleNext = () => {
    const formData = {
      birthDate,
      email,
      gender,
      kaKaoId,
      nickName,
      salary
    };
    console.log("제출 폼 데이터:", formData);
    setUserForm(formData);

    const fetchAuth = () => instance.post(`/members/signUp`, formData);
    fetchAuth().then(response => {
      const JWT = response.data.accessToken;
      if (JWT) {
        if (typeof localStorage !== "undefined") localStorage.setItem("EXIT_LOGIN_TOKEN", JWT);
        console.log("로그인 성공");
      }
    });
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
        <Link href="/onboarding/contract" className="w-full">
          <PrimaryButton color="default" size="small" onClick={handleNext}>
            확인
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
