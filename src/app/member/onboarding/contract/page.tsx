"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contractAgreedState } from "@/src/recoil/user.atoms";
import { Button } from "@/src/components/Common/Button";
import FormSubmitComponent from "@/src/hooks/FormSubmitComponent";

export default function Contract() {
  const [contractAgreed, setContractAgreed] = useRecoilState(contractAgreedState);
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => {
    setContractAgreed(true);
    setSubmitted(true);
  };
  return (
    <div className="flex flex-col justify-between h-screen gap-[26px] px-4 py-10">
      {contractAgreed ? (
        <>
          <span className="sb-25-600 text-gray-700">약관에 동의하셨습니다.</span>
          <FormSubmitComponent />
        </>
      ) : (
        <>
          <div className="flex flex-col pt-20">
            <span>🤫</span>
            <span className="sb-25-600 text-gray-700">
              입력한 정보를 <br />
              한번 더 확인해주세요
            </span>
            <span className="r-12-400 text-gray-600">
              정확한 지출 데이터 조회와 쉬운 바이바이 서비스 제공을 위해 약관 동의가 꼭 필요합니다.
            </span>
          </div>
          <Button color="default" size="large" onClick={handleNext}>
            동의하고 가입하기
          </Button>
        </>
      )}
      {submitted && <p>폼이 성공적으로 제출되었습니다!</p>}
    </div>
  );
}
