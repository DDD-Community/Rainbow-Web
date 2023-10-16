"use client";

import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { useRouter } from "next/navigation";
import { LoginDataType } from "@/src/constant/api.constant";
import { instance, setClientHeaders } from "@/src/api/auth/apis";
import { emailState, kaKaoIdState } from "@/src/recoil/user.atoms";

interface LoginResponseType {
  data: LoginDataType;
}

export const fetchAuth = (code: string): Promise<LoginResponseType> =>
  instance.get(`/members/login?code=${code}`, {
    params: {
      status: process.env.NEXT_PUBLIC_LOGIN_REDIRECT_PARAMETER
    }
  });

export const LoginHandler = (code: string) =>
  fetchAuth(code).then((response: LoginResponseType) => {
    const firstData = response.data.data;
    if (firstData.accessToken && firstData.refreshToken) {
      return {
        accessToken: firstData.accessToken,
        refreshToken: firstData.refreshToken
      };
    }
    if (firstData.email && firstData.kaKaoId) {
      return {
        email: firstData.email,
        kaKaoId: firstData.kaKaoId
      };
    }

    return null;
  });

function Kakao() {
  const router = useRouter();
  const url = typeof window !== "undefined" ? new URL(window.location.href) : null;
  const code: string | null = url ? url.searchParams.get("code") : null;
  const setKakaoId = useSetRecoilState(kaKaoIdState);
  const setEmail = useSetRecoilState(emailState);

  useEffect(() => {
    if (code !== null) {
      LoginHandler(code).then(data => {
        if (data && data.kaKaoId && data.email) {
          setKakaoId(data.kaKaoId);
          setEmail(data.email);
          router.replace("/onboarding");
        }
        if (data && data.accessToken && data.refreshToken) {
          if (typeof window !== "undefined") {
            const { accessToken } = data;
            const { refreshToken } = data;

            localStorage.setItem("EXIT_LOGIN_ACCESS_TOKEN", accessToken);
            localStorage.setItem("EXIT_LOGIN_REFRESH_TOKEN", refreshToken);

            setClientHeaders(accessToken);

            router.replace("/main");
          }
        }
      });
    }
  }, []);

  return <div />;
}
export default Kakao;
