"use client";

import { useEffect } from "react";
import { authInstance } from "@/src/api/auth/client";
import { LoginDataType } from "@/src/constant/api.constant";
// import { LoginHandler } from "./LoginHandler";

interface LoginResponseType {
  data: LoginDataType;
}
export const fetchAuth = (code: string): Promise<LoginResponseType> =>
  authInstance.get(`/members/login?code=${code}`);

function Kakao() {
  const code: string = new URL(window.location.href).searchParams.get("code")!;

  useEffect(() => {
    fetchAuth(code).then((response: LoginResponseType) => {
      if (response.data.data.email) {
        window.location.replace("/member/onboarding");
      }
      // const JWT = response.data.data.accessToken;
      // if (JWT) localStorage.setItem("EXIT_LOGIN_TOKEN", JWT);
      // console.log("로그인 성공");
    });
  }, []);
}
export default Kakao;
