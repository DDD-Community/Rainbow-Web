import React from "react";

export default function Checking() {
  const handleClickNextButton = () => {
    window.location.replace("/member/onboarding/contract");
  };

  return (
    <div>
      <h2>입력한 정보를 한번 더 확인해주세요</h2>
      <button type="button" onClick={handleClickNextButton}>
        확인
      </button>
    </div>
  );
}
