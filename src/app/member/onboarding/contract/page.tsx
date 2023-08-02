"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contractAgreedState } from "@/src/recoil/user.atoms";
import FormSubmitComponent from "@/hooks/FormSubmitComponent";

export default function Contract() {
  const [contractAgreed, setContractAgreed] = useRecoilState(contractAgreedState);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setContractAgreed(true);
    setSubmitted(true);
  };
  return (
    <div>
      {contractAgreed ? (
        <>
          <h2>약관에 동의하셨습니다.</h2>
          <FormSubmitComponent />
        </>
      ) : (
        <>
          <h2>앱 사용을 위해 약관에 동의해주세요</h2>
          <button type="button" onClick={handleNext}>
            동의하고 가입하기
          </button>
        </>
      )}
      {submitted && <p>폼이 성공적으로 제출되었습니다!</p>}
    </div>
  );
}
