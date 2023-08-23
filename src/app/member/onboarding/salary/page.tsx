"use client";

import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { salaryState } from "@/src/recoil/user.atoms";
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
  const setSalaryRecoil = useSetRecoilState(salaryState);
  const [options, setOptions] = useState<SalaryOption[]>([]);
  const [selectedValue, setSelectedValue] = useState("");

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
  const handleNext = () => {
    setSalaryRecoil(selectedValue);
    window.location.replace("/member/onboarding/checking");
  };
  const canActiveNextButton = Boolean(!selectedValue);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>🤫</div>
        <div className="sb-25-600 text-gray-700">
          쉿! 님의 <br />
          연봉은 참고만 할게요
        </div>
      </div>
      <SelectSalary options={options} text="만원" onChange={handleSelectChange} />
      <Information className="py-3">비슷한 연봉을 받는 또래 친구들을 찾아줄게요</Information>

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

export async function getServerSideProps() {
  try {
    const response = await authInstance.get(`/members/salary`);
    const serverData = response.data.data;

    const options = serverData.map((item: any) => ({
      value: item.salaryId.toString(),
      name: item.salaryRange
    }));

    return {
      props: {
        options
      }
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        options: []
      }
    };
  }
}
