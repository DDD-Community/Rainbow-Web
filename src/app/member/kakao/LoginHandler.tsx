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
  return fetchAuth(code);
}
