"use client";

import React from "react";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import LottieAnimation from "@/src/hooks/LottieAnimation";
import { OnboardingMotion } from "@/public/assets/motions";

export default function Onboarding() {
  const handleClickNextButton = () => {
    window.location.replace("/member/onboarding/email");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center pt-20">
        <div className="text-gray-700 sb-25-600">지출 관리의 시작</div>
        <div className="text-gray-700 sb-25-600 pb-3">👋바이바이와 함께 해요</div>
        <div className="text-gray-600 m-16-500">또래 친구들과 함께 한달 지출을 줄여보세요!</div>
      </div>
      <LottieAnimation className="p-5" animation={OnboardingMotion} />

      <ButtonField>
        <PrimaryButton color="default" size="large" onClick={handleClickNextButton}>
          시작하기
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}
