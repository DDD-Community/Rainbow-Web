"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contractAgreedState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import FormSubmitComponent from "@/src/hooks/FormSubmitComponent";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";

export default function Contract() {
  const [contractAgreed, setContractAgreed] = useRecoilState(contractAgreedState);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setContractAgreed(true);
    setSubmitted(true);
  };
  return (
    <div className="flex flex-col justify-center">
      {contractAgreed ? (
        <>
          <span className="sb-25-600 text-gray-700">약관에 동의하셨습니다.</span>
          <FormSubmitComponent />
        </>
      ) : (
        <div className="flex flex-col items-start pt-20 pb-10">
          <div>👀</div>
          <div className="sb-25-600 text-gray-700">
            앱 사용을 위해 <br />
            약관에 동의해주세요
          </div>
          <div className="r-12-400 text-gray-600 py-5">
            정확한 지출 데이터 조회와 쉬운 바이바이 서비스 제공을 위해 약관 동의가 꼭 필요합니다.
          </div>
          <ButtonField>
            <PrimaryButton color="default" size="large" onClick={handleNext}>
              동의하고 가입하기
            </PrimaryButton>
          </ButtonField>
        </div>
      )}
      {submitted && <p>폼이 성공적으로 제출되었습니다!</p>}
    </div>
  );
}
