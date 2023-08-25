"use client";

import React from "react";
import Onboarding from "./onboarding/page";
// import Start from "./member/kakao/Start";

function Home() {
  return (
    <div className="flex justify-center items-center">
      {/* <Start /> */}
      <Onboarding />
    </div>
  );
}

export default Home;
