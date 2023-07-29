import React from "react";

export default function Contract() {
  const handleClickNextButton = () => {
    window.location.replace("/auth/onboarding/following");
  };
  return (
    <div>
      <h2>앱 사용을 위해 약관에 동의해주세요</h2>
      <button type="button" onClick={handleClickNextButton}>
        동의하고 가입하기
      </button>
    </div>
  );
}
