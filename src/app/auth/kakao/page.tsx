"use client";

import React, { useEffect } from "react";

function Kakao() {
  const code: string = new URL(window.location.href).searchParams.get("code")!;
  useEffect(() => {
    console.log("code 전달 후 get 요청 보내기");
    console.log(code);
  }, []);

  return <div />;
}
export default Kakao;
