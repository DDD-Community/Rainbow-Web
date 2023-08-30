"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { LoginDataType } from "@/src/constant/api.constant";
import { LoginHandler } from "./LoginHandler";

interface LoginResponseType {
  data: LoginDataType;
}

function Kakao() {
  const router = useRouter();

  useEffect(() => {
    const code: string = new URL(process.env.NEXT_PUBLIC_DOMAIN ?? "").searchParams.get("code")!;
    LoginHandler(code).then((res: LoginResponseType) => {
      if (res.data.data.email) {
        router.replace("/member/onboarding");
      }
    });
  }, []);

  return <div />;
}
export default Kakao;
