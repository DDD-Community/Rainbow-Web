"use client";

import React, { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import {
  // emailState,
  idState,
  domainState,
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
  // const email = useRecoilValue(emailState);
  const id = useRecoilValue(idState);
  const domain = useRecoilValue(domainState);
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
    {
      id: uuidv4(),
      label: "성별",
      value: gender === "female" ? "여" : "남",
      link: "/onboarding/gender"
    },
    {
      id: uuidv4(),
      label: "생일",
      value: birthDate.split("-").join(". "),
      link: "/onboarding/birth"
    },
    { id: uuidv4(), label: "연봉", value: `${salary} 만원`, link: "/onboarding/salary" }
  ];

  const handleNext = () => {
    const formData = {
      birthDate,
      email: `${id}@${domain}`,
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
        if (typeof window !== "undefined") localStorage.setItem("EXIT_LOGIN_TOKEN", JWT);
        console.log("로그인 성공");
      }
    });
  };

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex flex-col items-start h-full min-h-[490px] pt-20 pb-10">
        <div className="flex flex-col gap-2">
          <span className="sb-25-600">👀</span>
          <p className="sb-25-600 text-gray-700 leading-[130%]">
            입력한 정보를 <br />
            한번 더 확인해주세요
          </p>
        </div>

        <div className="flex flex-col gap-[14px] w-full mb-[20px] mt-[44px]">
          {data.map(item => (
            <div
              className="grid grid-cols-[auto_1fr_auto] flex items-center gap-1 w-full"
              key={item.id}
            >
              <div className="w-[60px] shrink-0">
                <span className="text-primary-default m-13-500 p-2">{item.label}</span>
              </div>
              <div className="w-full min-w-full h-full">
                <span className="text-gray-700 r-14-400">{item.value}</span>
              </div>
              <div className="w-[25px] shrink-0">
                <Link href={item.link} className="r-14-400 text-gray-500">
                  수정
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Information>내 정보는 내 프로필에서 다시 수정할 수 있어요</Information>
      </div>

      <ButtonField className="py-0">
        <Link href="/onboarding/contract">
          <PrimaryButton color="default" size="small" onClick={handleNext}>
            확인
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
