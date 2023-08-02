"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { genderState } from "@/src/recoil/user.atoms";

export default function Gender() {
  const [gender, setGender] = useState("");
  const setGenderRecoil = useSetRecoilState(genderState);

  const handleNext = () => {
    setGenderRecoil(gender);
    window.location.replace("/member/onboarding/birth");
  };

  const canActiveNextButton = Boolean(!gender);

  return (
    <div>
      <h2>님의 성별을 입력해주세요</h2>
      <input type="text" value={gender} onChange={e => setGender(e.target.value)} />
      <button type="button" disabled={canActiveNextButton} onClick={handleNext}>
        확인
      </button>
    </div>
  );
}
