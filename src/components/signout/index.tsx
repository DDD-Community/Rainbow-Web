import React from "react";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";

function Logout() {
  const handleLogout = () => {
    // if (localStorage.getItem("EXIT_LOGIN_ACCESS_TOKEN")) {
    //   localStorage.removeItem("EXIT_LOGIN_ACCESS_TOKEN");
    // }

    console.log("회원탈퇴 버튼이 눌렸습니다");
  };

  return (
    <div className="flex w-343">
      <RoundedButton onClick={handleLogout} color="hover" size="small">
        회원탈퇴
      </RoundedButton>
    </div>
  );
}

export default Logout;
