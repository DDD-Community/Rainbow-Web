"use client";

import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { salaryState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { Select } from "@/src/components/Common/Select";
import { authInstance } from "@/src/api/auth/client";
import { TextInput } from "@/src/components/Common/Input";

interface PropsType {
  nickname: string;
}

interface SalaryOption {
  value: string;
  name: string;
}

interface ApiResponse {
  salaryRange: string;
  idx: number;
  salaryId: number;
}

export default function Salary(nickname: PropsType) {
  const setSalaryRecoil = useSetRecoilState(salaryState);
  const [options, setOptions] = useState<SalaryOption[]>([]);
  const [selectedValue, setSelectedValue] = useState(0);

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
      console.log(newOptions);
    });
  }, []);

  const handleSelectChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleNext = () => {
    setSalaryRecoil(selectedValue);
    window.location.replace("/member/onboarding/checking");
  };
  const canActiveNextButton = Boolean(!selectedValue);
  const text = `쉿! ${nickname}님의 연봉은 저희만 볼게요`;

  return (
    <div>
      <h2>{text}</h2>
      <TextInput>
        <TextInput.Border>
          <Select options={options} onChange={handleSelectChange} />
        </TextInput.Border>
      </TextInput>

      <ButtonField>
        <PrimaryButton
          color="default"
          size="small"
          disabled={canActiveNextButton}
          onClick={handleNext}
        >
          확인
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}