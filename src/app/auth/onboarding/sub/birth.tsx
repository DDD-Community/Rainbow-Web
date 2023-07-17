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

export default function Birth() {
  const [birth, setBirth] = useState("");
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirth(e.target.value);
  };
  const handleClickNextButton = () => {
    setProps({ ...props, birth });
  };

  const canActiveNextButton = Boolean(!birth);
  // || isNicknameDuplicate; // true -> disable

  return (
    <div>
      <h2>생년월일을 작성해주세요.</h2>
      <div>
        <input name="birth" placeholder="생년월일" value={birth} onChange={handleInputChange} />
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
