"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { nicknameState, salaryState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { authInstance } from "@/src/api/auth/client";
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
  const nicknameValue = useRecoilValue(nicknameState);

  useEffect(() => {
    // 서버에서 데이터를 받아올 API 요청 예시 (실제로는 서버에서 데이터를 가져와야 함)

    const fetchAuth = () => authInstance.get(`/members/salary`);
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
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>🤫</div>
        <div className="sb-25-600 text-gray-700">
          쉿! {nicknameValue}님의 <br />
          연봉은 참고만 할게요
        </div>
      </div>
      <SelectSalary options={options} text="만원" onChange={handleSelectChange} />
      <Information className="py-3">비슷한 연봉을 받는 또래 친구들을 찾아줄게요</Information>

      <ButtonField>
        <Link href="/member/onboarding/checking" className="w-full">
          <PrimaryButton color="default" size="small" disabled={canActiveNextButton}>
            확인
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
