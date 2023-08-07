"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { genderState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";

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
      <ButtonField>
        <PrimaryButton
          color="default"
          size="small"
          disabled={canActiveNextButton}
          onClick={handleNext}
        >
          확인
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}
