"use client";

import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { LoginDataType } from "@/src/constant/api.constant";
import { authInstance } from "@/src/api/auth/client";
import { emailState, kaKaoIdState } from "@/src/recoil/user.atoms";

interface LoginResponseType {
  data: LoginDataType;
}

export const fetchAuth = (code: string): Promise<LoginResponseType> =>
  authInstance.get(`/members/login?code=${code}`);

export const LoginHandler = (code: string) =>
  fetchAuth(code).then((response: LoginResponseType) => {
    const firstData = response.data.data;
    if (firstData.email && firstData.kakaoId) {
      return {
        email: firstData.email,
        kakaoId: firstData.kakaoId
      };
    }
    return null;
  });

function Kakao() {
  const router = useRouter();
  const code: string = new URL(
    typeof window !== "undefined" ? window.location.href : ""
  ).searchParams.get("code")!;
  const setKakaoId = useSetRecoilState(kaKaoIdState);
  const setEmail = useSetRecoilState(emailState);

  useEffect(() => {
    LoginHandler(code).then(data => {
      if (data && data.kakaoId && data.email) {
        setKakaoId(data.kakaoId);
        setEmail(data.email);
        router.replace("/onboarding");
      }
    });
  }, []);

  return <div />;
}
export default Kakao;
