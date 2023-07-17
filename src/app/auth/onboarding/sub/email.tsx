"use client";

import React, { useState } from "react";
import "./page.css";
// import { useRecoilState } from "recoil";
// import { propsState } from "../selector";

// interface Props {
//   email: string;
//   nickname: string;
//   birth: string;
//   salary: number;
//   gender: string;
// }

export default function Email() {
  const [email, setEmail] = useState("");
  // const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleClickNextButton = () => {
    console.log("다음장!");
    // setProps({ ...props, email });
  };

  const canActiveNextButton = Boolean(!email);
  // || isNicknameDuplicate; // true -> disable

  return (
    <div>
      <h2>이메일을 확인해주세요.</h2>
      <div>
        <input name="email" placeholder="이메일" value={email} onChange={handleInputChange} />
        <button type="button">중복확인</button>
      </div>
      <div className="button-field">
        <button type="button" disabled={canActiveNextButton} onClick={handleClickNextButton}>
          다음
        </button>
      </div>
    </div>
  );
}
