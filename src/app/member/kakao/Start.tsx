"use client";

import Link from "next/link";
import { IconBuyBye, IconKakao } from "@/public/assets/images/icons";
import { Intro } from "@/public/assets/motions";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { KAKAO_URL } from "@/src/constant/api.constant";
import LottieAnimation from "@/src/hooks/LottieAnimation";
import useFooterNavBar from "@/src/hooks/useFooterNavBar";

function Start() {
  useFooterNavBar({ open: false });

  return (
    <div className="flex flex-col justify-center w-full bg-gray-700 h-full">
      <div className="flex flex-col gap-10 justify-center items-center h-full">
        <LogoTitleContainer />

        <LottieAnimationContainer />
      </div>

      <LoginButtonContainer />
    </div>
  );
}
export default Start;

function LogoTitleContainer() {
  return (
    <div className="pt-4">
      <div className="mb-[14px]">
        <p className="text-gray-400 text-[20px] text-center leading-[130%]">지출 관리의 시작</p>
        <p className="text-gray-400 text-[20px] text-center leading-[130%]">바이바이와 함께해요</p>
      </div>
      <IconBuyBye />
    </div>
  );
}

function LottieAnimationContainer() {
  return (
    <div className="flex justify-center">
      <div className="w-[270px]">
        <LottieAnimation animation={Intro} />
      </div>
    </div>
  );
}

function LoginButtonContainer() {
  return (
    <ButtonField className="p-4 pt-3">
      <Link
        href={KAKAO_URL}
        className="flex justify-center items-center bg-kakao-yellow rounded-[8px] w-full h-[52px]"
      >
        <div className="">
          <IconKakao />
        </div>
        <div className="m-16-500 text-kakao-brown">카카오 계정으로 시작하기</div>
      </Link>
    </ButtonField>
  );
}
