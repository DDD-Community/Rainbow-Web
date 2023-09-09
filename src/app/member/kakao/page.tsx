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
      });
    }
  }, []);

  return <div />;
}
export default Kakao;
