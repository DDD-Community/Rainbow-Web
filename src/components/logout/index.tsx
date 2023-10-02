import React from "react";
import { useRouter } from "next/navigation";
import { authInstance } from "@/src/api/auth/apis";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";

export const logoutApi = () =>
  authInstance.post(`/members/logout`).then(response => {
    console.log("로그아웃 성공:", response);
  });

function Logout() {
  const router = useRouter();
  const handleLogout = () => {
    logoutApi();
    if (typeof localStorage !== "undefined") {
      if (localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN")) {
        localStorage.removeItem("EXIT_LOGIN_ACCESS_TOKEN");
      }
      console.log("로그아웃 버튼이 눌렸습니다");
      if (!localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN")) {
        router.replace("/");
      }
    }
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
