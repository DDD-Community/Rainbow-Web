"use client";

import { Intro } from "@/public/assets/motions";
import { KAKAO_URL } from "@/src/constant/api.constant";
import LottieAnimation from "@/src/hooks/LottieAnimation";

function Start() {
  const loginHandler = () => {
    window.location.replace(KAKAO_URL);
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div className="sb-25-600 text-gray-700">안녕하세요 바이바이입니다</div>
      </div>
      <LottieAnimation animation={Intro} />
      <button
        type="button"
        className="flex justify-center items-center bg-gray-start text-white r-18-600 w-full "
        onClick={loginHandler}
      >
        카카오 계정으로 시작하기
      </button>
    </div>
  );
}

export default Start;
