"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import Link from "next/link";
import { contractAgreedState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import Checkbox from "@/src/components/Common/Checkbox";

export default function Contract() {
  const [contractAgreed, setContractAgreed] = useRecoilState(contractAgreedState);
  const checkboxData = [
    {
      id: 1,
      label: "개인 정보 취급 방침 (필수)",
      link: "https://www.notion.so/ceaa67fb76344d3eb7aa53f9e4e69815?pvs=4"
    },
    {
      id: 2,
      label: "사용자 이용 약관 (필수)",
      link: "https://www.notion.so/7ff6ae8f70144af3b40f2e13e3f68528?pvs=4"
    },
    {
      id: 3,
      label: "제 3자 정보 제공 동의 (필수)",
      link: "https://www.notion.so/3-f986b22d6f5b46f8bcf50b1a06f20fbc?pvs=4"
    },
    {
      id: 4,
      label: "만 14세 이상입니다 (필수)",
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

  // 모든 체크박스 상태가 변경될 때마다 호출되는 useEffect 사용
  useEffect(() => {
    const allChecked = Object.values(checkboxStates).every(value => value);
    setContractAgreed(allChecked);
  }, [checkboxStates]);

  const toggleAllCheckboxes = () => {
    const allChecked = Object.values(checkboxStates).every(value => value);
    const updatedStates = Object.fromEntries(
      Object.keys(checkboxStates).map(id => [id, !allChecked])
    );
    setCheckboxStates(updatedStates);
  };
  const canActiveNextButton = Boolean(!contractAgreed);

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex flex-col items-start h-full min-h-[470px] pt-20">
        <div className="flex flex-col gap-2">
          <span className="sb-25-600">🔎</span>
          <p className="sb-25-600 text-gray-700 leading-[130%]">
            앱 사용을 위해 <br />
            약관에 동의해주세요
          </p>
        </div>

        <p className="r-12-400 text-gray-600 mt-[18px] mb-[28px]">
          정확한 지출 데이터 조회와 쉬운 바이바이 서비스 제공을 위해 약관 동의가 꼭 필요합니다.
        </p>

        <button
          type="button"
          className="bg-gray-50 w-full rounded-[10px] flex items-center px-[13px] py-[15px] border border-black[0.03] mb-4"
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            toggleAllCheckboxes();
            e.preventDefault();
          }}
        >
          <Checkbox
            size="m"
            labelText="전체 약관에 동의합니다"
            isChecked={Object.values(checkboxStates).every(value => value)}
            onChange={() => {}}
          />
        </button>

        <div className="flex flex-col w-full gap-1.5">
          {checkboxData.map(checkbox => (
            <div
              key={checkbox.id}
              className="flex justify-between grid grid-cols-[1fr_auto] pr-4 pl-[13px]"
            >
              <div className="min-w-full">
                <Checkbox
                  size="s"
                  labelText={checkbox.label}
                  isChecked={checkboxStates[checkbox.id]}
                  onChange={() => handleCheckboxChange(checkbox.id)}
                />
              </div>
              <a
                target="_blank"
                href={checkbox.link}
                className="w-[25px] shrink-0 m-14-500 text-gray-500"
                rel="noreferrer"
              >
                보기
              </a>
            </div>
          ))}
        </div>
      </div>

      <ButtonField className="py-0">
        <Link href="/onboarding/following" className="w-full">
          <PrimaryButton color="default" size="large" disabled={canActiveNextButton}>
            동의하고 가입하기
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
