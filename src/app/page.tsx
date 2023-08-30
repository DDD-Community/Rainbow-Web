"use client";

import React from "react";
import DefaultContainer from "../components/defaultContainer";
import Onboarding from "./onboarding/page";
// import Start from "./member/kakao/Start";

function Home() {
  return (
    <DefaultContainer>
      <div className="flex justify-center items-center">
        {/* <Start /> */}
        <Onboarding />
      </div>
    </DefaultContainer>
  );
}

export default Home;
