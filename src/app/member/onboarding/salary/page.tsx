"use client";

import React, { useState } from "react";
import { salaryState } from "@/src/recoil/user.atoms";
import { useSetRecoilState } from "recoil";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";

interface PropsType {
  nickname: string;
}

export default function Salary(nickname: PropsType) {
  const [salary, setSalary] = useState("");
  const setSalaryRecoil = useSetRecoilState(salaryState);

  const handleNext = () => {
    setSalaryRecoil(salary);
    window.location.replace("/member/onboarding/checking");
  };

  const canActiveNextButton = Boolean(!salary);
  const text = `쉿! ${nickname}님의 연봉은 저희만 볼게요`;

  return (
    <div>
      <h2>{text}</h2>
      <input type="text" value={salary} onChange={e => setSalary(e.target.value)} />
      <ButtonField>
        <PrimaryButton
          color="default"
          size="small"
          disabled={canActiveNextButton}
          onClick={handleNext}
        >
          확인
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}
