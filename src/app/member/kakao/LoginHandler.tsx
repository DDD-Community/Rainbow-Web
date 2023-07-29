"use client";

import { LoginDataType } from "@/src/constant/api.constant";
import { authInstance } from "@/src/api/auth/client";
// import { useRecoilState } from "recoil";
// import { useState } from "react";
// import { propsState } from "../selector";

interface LoginResponseType {
  data: LoginDataType;
}

// interface Props {
//   email: string;
//   nickname: string;
//   birthDate: string;
//   salaryStart: number;
//   salaryEnd: number;
//   gender: string;
// }

export const fetchAuth = (code: string): Promise<LoginResponseType> =>
  authInstance.get(`/member/login?code=${code}`);

export function LoginHandler(code: string) {
  fetchAuth(code)
    .then((response: LoginResponseType) => {
      console.log(response.data);
      if (response.data.data.email) {
        console.log(response.data.data.email);
        window.location.replace("/member/onboarding");
      }
      // const JWT = response.data.data.accessToken;
      // if (JWT) localStorage.setItem("EXIT_LOGIN_TOKEN", JWT);
      // console.log("로그인 성공");

      // window.location.replace("/");
    })
    .catch(() => {
      console.log("로그인에 실패하였습니다.");
      // window.location.replace("/login");
    });
}
