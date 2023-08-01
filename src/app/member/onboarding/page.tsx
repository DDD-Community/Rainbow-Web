"use client";

import React from "react";

export default function Onboarding() {
  const handleClickNextButton = () => {
    window.location.replace("/member/onboarding/email");
  };
  return (
    <div>
      <h2>지출 관리의 시작</h2>
      <h2>바이바이와 함께 해요</h2>
      <h5>비슷한 또래 친구들과 함께 지출을 줄여보세요</h5>
      <button type="button" onClick={handleClickNextButton}>
        시작하기
      </button>
    </div>
  );
}
