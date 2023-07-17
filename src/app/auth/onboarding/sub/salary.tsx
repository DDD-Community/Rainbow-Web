import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { propsState } from "../selector";

interface Props {
  email: string;
  nickname: string;
  birth: string;
  salary: number;
  gender: string;
}

export default function Salary() {
  const [salary, setSalary] = useState(0);
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = parseInt(e.target.value, 10);
    setSalary(inputValue);
  };
  const handleClickNextButton = () => {
    setProps({ ...props, salary });
  };

  const canActiveNextButton = salary === 0;
  // || isNicknameDuplicate; // true -> disable

  return (
    <div>
      <h2>연봉을 작성해주세요.</h2>
      <div>
        <input name="salary" placeholder="연봉" value={salary} onChange={handleInputChange} />
        <button type="button">중복확인</button>
      </div>
      <div>
        <button type="button" disabled={!canActiveNextButton} onClick={handleClickNextButton}>
          다음
        </button>
        <span>필수 입력 항목입니다.</span>
      </div>
    </div>
  );
}
