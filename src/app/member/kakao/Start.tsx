"use client";

import { KAKAO_URL } from "@/src/constant/api.constant";

function Start() {
  const loginHandler = () => {
    window.location.replace(KAKAO_URL);
  };

  return (
    <>
      <h1>안녕하세요 바이바이입니다</h1>
      <button type="button" onClick={loginHandler}>
        카카오 계정으로 시작하기
      </button>
    </>
  );
}

export default Start;
