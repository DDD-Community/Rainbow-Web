"use client";

import { LoginDataType } from "@/src/constant/api.constant";
import { authInstance } from "@/src/api/auth/client";
// import { useRecoilState } from "recoil";
// import { useState } from "react";
// import { propsState } from "../selector";

interface LoginResponseType {
  data: LoginDataType;
}

export const fetchAuth = (code: string): Promise<LoginResponseType> =>
  authInstance.get(`/members/login?code=${code}`);

export function LoginHandler(code: string) {
  fetchAuth(code).then((response: LoginResponseType) => {
    if (response.data.data.email) {
      window.location.replace("/member/onboarding");
    }
    // const JWT = response.data.data.accessToken;
    // if (JWT) localStorage.setItem("EXIT_LOGIN_TOKEN", JWT);
    // console.log("로그인 성공");
  });
}