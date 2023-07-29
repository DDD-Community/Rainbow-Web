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

export default function Gender() {
  const [gender, setGender] = useState("");
  const [props, setProps] = useRecoilState<Props>(propsState);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  const handleClickNextButton = () => {
    window.location.replace("/member/onboarding/birth");
    setProps({ ...props, gender });
  };

  const canActiveNextButton = Boolean(!gender);
  // || isNicknameDuplicate; // true -> disable

  return (
    <div>
      <h2>님의 성별을 입력해주세요</h2>
      <div>
        <input name="gender" placeholder="성별" value={gender} onChange={handleInputChange} />
      </div>
      <div>
        <button type="button" disabled={canActiveNextButton} onClick={handleClickNextButton}>
          확인
        </button>
      </div>
    </div>
  );
}
