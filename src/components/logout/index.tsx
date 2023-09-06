import React from "react";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";

function Logout() {
  const handleLogout = () => {
    localStorage.removeItem("EXIT_LOGIN_TOKEN");
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
