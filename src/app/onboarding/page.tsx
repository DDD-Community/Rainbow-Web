import React from "react";
import Link from "next/link";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import LottieAnimation from "@/src/hooks/LottieAnimation";
import { OnboardingMotion } from "@/public/assets/motions";

export default function Onboarding() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex flex-col items-center">
          <h1 className="text-gray-700 sb-25-600">지출 관리의 시작</h1>
          <h1 className="text-gray-700 sb-25-600">👋바이바이와 함께 해요</h1>
          <p className="text-gray-600 m-16-500">또래 친구들과 함께 한달 지출을 줄여보세요!</p>
        </div>

        <div className="max-w-[308px] w-[50vh]">
          <LottieAnimation animation={OnboardingMotion} />
        </div>
      </div>

      <div className="p-4">
        <ButtonField className="py-0">
          <Link href="/onboarding/email" className="w-full flex justify-end">
            <PrimaryButton color="default" size="large">
              시작하기
            </PrimaryButton>
          </Link>
        </ButtonField>
      </div>
    </div>
  );
}
