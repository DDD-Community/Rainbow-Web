import React from "react";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";

function Logout() {
  const handleLogout = () => {
    if (localStorage.getItem("EXIT_LOGIN_TOKEN")) {
      localStorage.removeItem("EXIT_LOGIN_TOKEN");
    }

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
