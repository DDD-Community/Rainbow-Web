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

export default function Birth() {
  const [birthDate, setBirthDate] = useState("");
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDate(e.target.value);
  };
  const handleClickNextButton = () => {
    window.location.replace("/auth/onboarding/salary");
    setProps({ ...props, birthDate });
  };

  const canActiveNextButton = Boolean(!birthDate);

  return (
    <div>
      <h2>님의 생일을 입력해주세요</h2>
      <div>
        <input name="birth" placeholder="생년월일" value={birthDate} onChange={handleInputChange} />
      </div>
      <div>
        <button type="button" disabled={canActiveNextButton} onClick={handleClickNextButton}>
          확인
        </button>
      </div>
    </div>
  );
}
