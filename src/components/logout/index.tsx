import React from "react";
import { authInstance } from "@/src/api/auth/apis";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";

export const logoutApi = () =>
  authInstance.post(`/members/logout`).then(response => {
    console.log("로그아웃 성공:", response);
  });

function Logout() {
  const handleLogout = () => {
    if (localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN")) {
      localStorage.removeItem("EXIT_LOGIN_ACCESS_TOKEN");
    }
    logoutApi();
    console.log("로그아웃 버튼이 눌렸습니다");
  };

  return (
    <div className="flex w-343">
      <RoundedButton onClick={handleLogout} color="hover" size="small">
        로그아웃
      </RoundedButton>
    </div>
  );
}

export default Logout;
