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

export default function Gender() {
  const [gender, setGender] = useState("");
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  const handleClickNextButton = () => {
    setProps({ ...props, gender });
  };

  const canActiveNextButton = Boolean(!gender);
  // || isNicknameDuplicate; // true -> disable

  return (
    <div>
      <h2>성별을 작성해주세요.</h2>
      <div>
        <input name="gender" placeholder="성별" value={gender} onChange={handleInputChange} />
        <button type="button">중복확인</button>
      </div>
      <div>
        <button type="button" disabled={canActiveNextButton} onClick={handleClickNextButton}>
          다음
        </button>
        <span>필수 입력 항목입니다.</span>
      </div>
    </div>
  );
}
