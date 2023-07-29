"use client";

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

export default function Email() {
  const [email, setEmail] = useState("");
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleClickNextButton = () => {
    window.location.replace("/auth/onboarding/nickname");
    setProps({ ...props, email });
  };

  const canActiveNextButton = Boolean(!props);
  // || isEmailDuplicate; // true -> disable

  return (
    <div>
      <h2>본인 이메일이 맞다면 아래 확인 버튼을 눌러주세요</h2>
      <div>
        <input name="email" placeholder="이메일" value={email} onChange={handleInputChange} />
      </div>
      <div className="button-field">
        <button type="button" disabled={canActiveNextButton} onClick={handleClickNextButton}>
          확인
        </button>
      </div>
    </div>
  );
}
