"use client";

import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import {
  emailState,
  nicknameState,
  genderState,
  birthdayState,
  salaryState
} from "@/src/recoil/user.atoms";
import { Button } from "@/src/components/Common/Button";

export default function Checking() {
  const email = useRecoilValue(emailState);
  const nickname = useRecoilValue(nicknameState);
  const gender = useRecoilValue(genderState);
  const birthday = useRecoilValue(birthdayState);
  const salary = useRecoilValue(salaryState);
  const [submitted, setSubmitted] = useState(false);
  const handleNext = () => {
    const formData = {
      email,
      nickname,
      gender,
      birthday,
      salary
    };
    console.log("제출 폼 데이터:", formData);
    setSubmitted(true);
    window.location.replace("/member/onboarding/contract");
  };

  return (
    <div>
      <h2>입력한 정보를 한번 더 확인해주세요</h2>
      <p>이메일: {email}</p>
      <p>닉네임: {nickname}</p>
      <p>성별: {gender}</p>
      <p>생일: {birthday}</p>
      <p>연봉: {salary}</p>
      <Button color="default" size="small" onClick={handleNext}>
        확인
      </Button>
      {submitted && <p>폼이 성공적으로 제출되었습니다!</p>}
    </div>
  );
}
