import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { propsState } from "../../selector";

interface Props {
  email: string;
  nickname: string;
  birthDate: string;
  salaryStart: number;
  salaryEnd: number;
  gender: string;
}
export const salaryBoundary = {
  "1500이하": [0, 1500],
  "1501~2000": [1501, 2000],
  "2001~2500": [2001, 1500],
  "2501~3000": [2501, 3000],
  "3001~3500": [3001, 3500],
  "3501~4000": [3501, 4000],
  "4001~4500": [4001, 4500],
  "4501~5000": [4501, 5000],
  "5001~5500": [5001, 5500],
  "5501~6000": [5501, 6000],
  "6001~6500": [6001, 6500],
  "6501~7000": [6501, 7000],
  "7001~7500": [7001, 7500]
}; // 이거 서버가 관리해야할듯 합니다. 2억이상까지 관리 프론트상에서 하면 안 좋을듯

export default function Salary() {
  const [salaryStart, setSalaryStart] = useState(0);
  const [salaryEnd, setSalaryEnd] = useState(0);
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputSalary = () => {
    setSalaryStart(salaryBoundary["1500이하"][0]);
    setSalaryEnd(salaryBoundary["1500이하"][1]);
  };
  const handleClickNextButton = () => {
    window.location.replace("/auth/onboarding/checking");
    setProps({ ...props, salaryStart, salaryEnd });
  };

  const canActiveNextButton = (salaryStart || salaryEnd) === 0;

  return (
    <div>
      <h2>쉿! 님의 연봉은 참고만 할게요</h2>
      <div>
        <button type="button" onChange={handleInputSalary}>
          1500이하
        </button>
      </div>
      <div>
        <button type="button" disabled={!canActiveNextButton} onClick={handleClickNextButton}>
          확인
        </button>
      </div>
    </div>
  );
}
