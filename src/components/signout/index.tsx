"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { authInstance } from "@/src/api/auth/apis";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";

export const deleteMember = () =>
  authInstance.delete(`/members/delete`).then(response => {
    console.log("삭제 성공:", response);
  });

function SignOut() {
  const router = useRouter();
  const handleSignOut = () => {
    deleteMember();
    if (typeof window !== "undefined") {
      if (localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN")) {
        localStorage.removeItem("EXIT_LOGIN_ACCESS_TOKEN");
      }

      console.log("회원탈퇴 버튼이 눌렸습니다");
      if (!localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN")) {
        router.replace("/");
      }
    }
  };

  return (
    <div className="flex w-343">
      <RoundedButton onClick={handleSignOut} color="hover" size="small">
        회원탈퇴
      </RoundedButton>
    </div>
  );
}

export default SignOut;
