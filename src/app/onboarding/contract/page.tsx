"use client";

import React, { useState } from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { contractAgreedState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import Checkbox from "@/src/components/Common/Checkbox";

export default function Contract() {
  const [contractAgreed, setContractAgreed] = useRecoilState(contractAgreedState);
  const [submitted, setSubmitted] = useState(false);
  const checkboxData = [
    {
      id: 1,
      label: "개인 정보 취급 방침",
      link: "https://www.notion.so/ceaa67fb76344d3eb7aa53f9e4e69815?pvs=4"
    },
    {
      id: 2,
      label: "사용자 이용 약관",
      link: "https://www.notion.so/7ff6ae8f70144af3b40f2e13e3f68528?pvs=4"
    },
    {
      id: 3,
      label: "제 3자 정보 제공 동의",
      link: "https://www.notion.so/3-f986b22d6f5b46f8bcf50b1a06f20fbc?pvs=4"
    },
    {
      id: 4,
      label: "만 14세 이상입니다",
      link: "https://www.notion.so/14-759400ed1cac4a2592a75fbc0bb84e71?pvs=4"
    }
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
  };
  const toggleAllCheckboxes = () => {
    const allChecked = Object.values(checkboxStates).every(value => value);
    const updatedStates = Object.fromEntries(
      Object.keys(checkboxStates).map(id => [id, !allChecked])
    );
    setCheckboxStates(updatedStates);
  };
  const canActiveNextButton = Boolean(!submitted || !contractAgreed);

  return (
    <div className="w-343 flex flex-col justify-center">
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
              <Link href={checkbox.link} className="m-14-500 text-gray-500">
                보기
              </Link>
            </div>
          ))}
        </div>
        <ButtonField>
          <Link href="/main" className="w-full">
            <PrimaryButton
              color="default"
              size="large"
              onClick={handleNext}
              disabled={canActiveNextButton}
            >
              동의하고 가입하기
            </PrimaryButton>
          </Link>
        </ButtonField>
      </div>
    </div>
  );
}
