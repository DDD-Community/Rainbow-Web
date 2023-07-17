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

export default function Nickname() {
  const [nickname, setNickname] = useState("");
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const updateProps = () => {
    setProps({ ...props, nickname });
  };

  const canActiveNextButton = Boolean(!props);
  // || isNicknameDuplicate; // true -> disable

  return (
    <div>
      <h2>닉네임을 입력해주세요.</h2>
      <div>
        <input name="nickname" placeholder="닉네임" value={nickname} onChange={handleInputChange} />
        <button type="button">중복확인</button>
      </div>
      <div>
        <button type="button" disabled={canActiveNextButton} onClick={updateProps}>
          다음
        </button>
        <span>필수 입력 항목입니다.</span>
      </div>
    </div>
  );
}
