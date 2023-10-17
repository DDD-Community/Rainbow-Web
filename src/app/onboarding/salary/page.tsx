"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { nickNameState, salaryState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { instance } from "@/src/api/auth/apis";
import { SelectSalary } from "@/src/components/Common/Select/SelectSalary";
import { Information } from "@/src/components/Information/Information";

interface SalaryOption {
  value: string;
  name: string;
}

interface ApiResponse {
  salaryRange: string;
  idx: number;
  salaryId: number;
}

export default function Salary() {
  const [options, setOptions] = useState<SalaryOption[]>([]);
  const [selectedValue, setSelectedValue] = useRecoilState(salaryState);
  const nicknameValue = useRecoilValue(nickNameState);

  useEffect(() => {
    // 서버에서 데이터를 받아올 API 요청 예시 (실제로는 서버에서 데이터를 가져와야 함)

    const fetchAuth = () => instance.get(`/members/salary`);
    fetchAuth().then(response => {
      const serverData: ApiResponse[] = response.data.data;

      const newOptions: SalaryOption[] = serverData.map(item => ({
        value: item.salaryId.toString(),
        name: item.salaryRange
      }));

      setOptions(newOptions);
    });
  }, []);

  const handleSelectChange = (event: string) => {
    setSelectedValue(event);
  };
  const canActiveNextButton = Boolean(!selectedValue);

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex flex-col items-start h-full min-h-[320px] pt-20 pb-10">
        <div className="flex flex-col gap-2">
          <span className="sb-25-600">🤫</span>
          <p className="sb-25-600 text-gray-700 leading-[130%]">
            쉿! {nicknameValue}님의 <br />
            연봉은 참고만 할게요
          </p>
        </div>

        <div className="w-full mt-[44px] mb-[14px]">
          <SelectSalary options={options} onChange={handleSelectChange} />
        </div>
        <Information>비슷한 연봉을 받는 또래 친구들을 찾아줄게요</Information>
      </div>

      <ButtonField className="py-0">
        <Link href="/onboarding/checking" className="w-full flex justify-end">
          <PrimaryButton color="default" size="small" disabled={canActiveNextButton}>
            확인
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
