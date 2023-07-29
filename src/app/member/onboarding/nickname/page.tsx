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

export default function Nickname() {
  const [nickname, setNickname] = useState("");
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };
  const handleClickNextButton = () => {
    window.location.replace("/auth/onboarding/gender");
    setProps({ ...props, nickname });
  };

  const canActiveNextButton = Boolean(!props);

  return (
    <div>
      <h2>본인을 확인할 수 있는 닉네임을 입력해주세요</h2>
      <div>
        <input name="nickname" placeholder="닉네임" value={nickname} onChange={handleInputChange} />
      </div>
      <div>
        <button type="button" disabled={canActiveNextButton} onClick={handleClickNextButton}>
          확인
        </button>
      </div>
    </div>
  );
}
