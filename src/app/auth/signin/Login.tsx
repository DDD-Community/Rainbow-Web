"use client";

import { KAKAO_URL } from "@/src/constant/api.constant";
import Image from "next/image";

function Login() {
  const loginHandler = () => {
    window.location.replace(KAKAO_URL);
  };

  return (
    <div>
      <h1>카카오 로그인</h1>
      <button type="button" onClick={loginHandler}>
        <Image
          src="/assets/kakao-login.png"
          alt="KakaoLoginButton"
          width={400}
          height={200}
          priority
        />
      </button>
    </div>
  );
}

export default Login;
