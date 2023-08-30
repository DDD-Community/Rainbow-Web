"use client";

import { IconBuyBye, IconKakao } from "@/public/assets/images/icons";
import { Intro } from "@/public/assets/motions";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { KAKAO_URL } from "@/src/constant/api.constant";
import LottieAnimation from "@/src/hooks/LottieAnimation";

function Start() {
  const loginHandler = () => {
    window.location.replace(KAKAO_URL);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center bg-gray-700 h-full">
      <div className="w-[343px] flex flex-col justify-center">
        <div className="flex flex-col items-center mt-20 mb-10">
          <div className="m-16-500 text-gray-400">지출 관리의 시작 </div>
          <div className="m-16-500 text-gray-400"> 바이바이와 함께해요</div>
          <IconBuyBye />
        </div>
        <LottieAnimation animation={Intro} className="px-[26px] mt-[26px]" />
        <ButtonField className="mb-[20px]">
          <button
            type="button"
            className="flex justify-center items-center bg-kakao-yellow rounded-[8px] w-full h-[52px]"
            onClick={loginHandler}
          >
            <div className="px-[14px]">
              <IconKakao />
            </div>
            <div className="m-16-500 text-kakao-brown">카카오 계정으로 시작하기</div>
          </button>
        </ButtonField>
      </div>
    </div>
  );
}

export default Start;
