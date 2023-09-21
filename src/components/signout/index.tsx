import React from "react";
import { authInstance } from "@/src/api/auth/apis";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";
// import { useRecoilValue } from "recoil";

export const deleteMember = (memberId: string): Promise<void> =>
  authInstance.delete(`/members/${memberId}/delete`).then(response => {
    console.log("삭제 성공:", response);
  });

function Logout() {
  // const memberId = useRecoilValue(memberIdState);
  const handleSignOut = () => {
    if (localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN")) {
      localStorage.removeItem("EXIT_LOGIN_ACCESS_TOKEN");
    }

    // deleteMember(memberId);
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

export default Logout;
