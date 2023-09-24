import React from "react";
import { authInstance } from "@/src/api/auth/apis";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";

export const deleteMember = () =>
  authInstance.delete(`/members/delete`).then(response => {
    console.log("삭제 성공:", response);
  });

function SignOut() {
  const handleSignOut = () => {
    if (localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN")) {
      localStorage.removeItem("EXIT_LOGIN_ACCESS_TOKEN");
      localStorage.removeItem("EXIT_LOGIN_REFRESH_TOKEN");
    }

    deleteMember();
    console.log("회원탈퇴 버튼이 눌렸습니다");
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
