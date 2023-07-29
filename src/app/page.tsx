import React from "react";
// import Start from "./auth/onboarding/start/page";
import { RecoilRoot } from "recoil";
import Login from "./member/login/Start";

function Home() {
  return (
    <RecoilRoot>
      <Login />
    </RecoilRoot>
  );
}

export default Home;
