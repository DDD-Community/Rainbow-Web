"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { contractAgreedState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import FormSubmitComponent from "@/src/hooks/FormSubmitComponent";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import Checkbox from "@/src/components/Common/Checkbox";

export default function Contract() {
  const [contractAgreed, setContractAgreed] = useRecoilState(contractAgreedState);
  const [submitted, setSubmitted] = useState(false);
  const checkboxData = [
    { id: 1, label: "개인 정보 취급 방침 (필수)" },
    { id: 2, label: "사용자 이용 약관 (필수)" },
    { id: 3, label: "제 3자 정보 제공 동의 (필수)" },
    { id: 4, label: "만 14세 이상입니다 (필수)" }
  ];

  const [checkboxStates, setCheckboxStates] = useState(
    checkboxData.reduce(
      (obj, item) => ({ ...obj, [item.id]: false }),
      {} as Record<number, boolean>
    )
  );

  const handleCheckboxChange = (id: number) => {
    setCheckboxStates(prevStates => ({
      ...prevStates,
      [id]: !prevStates[id]
    }));
  };

  const handleNext = (): void => {
    setContractAgreed(true);
    setSubmitted(true);
    window.location.replace("/member/onboarding/following");
  };
  const toggleAllCheckboxes = () => {
    const allChecked = Object.values(checkboxStates).every(value => value);
    const updatedStates = Object.fromEntries(
      Object.keys(checkboxStates).map(id => [id, !allChecked])
    );
    setCheckboxStates(updatedStates);
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
          <div className="bg-gray-50 w-full rounded-[10px] flex items-center p-3 border-[1px] border-gray-50 mb-3">
            <Checkbox
              size="m"
              labelText="전체 약관에 동의합니다"
              isChecked={Object.values(checkboxStates).every(value => value)}
              onChange={toggleAllCheckboxes}
            />
          </div>
          <div className="flex flex-col w-full">
            {checkboxData.map(checkbox => (
              <div className="flex justify-between p-1">
                <Checkbox
                  size="s"
                  labelText={checkbox.label}
                  isChecked={checkboxStates[checkbox.id]}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
                {/* <div className="m-14-500 text-gray-500">보기</div> */}
              </div>
            ))}
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
