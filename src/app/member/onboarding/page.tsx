"use client";

import React from "react";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";

export default function Onboarding() {
  const handleClickNextButton = () => {
    window.location.replace("/member/onboarding/email");
  };
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="text sb-25-600">지출 관리의 시작</div>
        <span>👋바이바이와 함께 해요</span>
        <span> 비슷한 또래 친구들과 함께 지출을 줄여보세요</span>
      </div>
      <ButtonField>
        <PrimaryButton
          className="w-full"
          color="default"
          size="large"
          onClick={handleClickNextButton}
        >
          시작하기
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}
