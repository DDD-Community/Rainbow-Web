"use client";

import React, { useEffect } from "react";
import { LoginHandler } from "./LoginHandler";

function Kakao() {
  const code: string = new URL(window?.location.href).searchParams.get("code")!;

  useEffect(() => {
    LoginHandler(code);
  }, []);

  return <div />;
}
export default Kakao;
