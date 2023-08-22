"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { genderState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import {
  IconActiveFemale,
  IconActiveMale,
  IconInActiveFemale,
  IconInActiveMale
} from "@/public/assets/images/icons/gender";

export default function Gender() {
  const [gender, setGender] = useState<string>("");
  const setGenderRecoil = useSetRecoilState(genderState);

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleNext = () => {
    setGenderRecoil(gender);
    window.location.replace("/member/onboarding/birth");
  };

  const canActiveNextButton = Boolean(!gender);

  return (
    <div>
      <h2>님의 성별을 선택해주세요</h2>
      <div className="flex gap-4">
        <button
          type="button"
          onClick={() => handleGenderClick("female")}
          className="cursor-pointer"
        >
          {gender === "female" ? <IconActiveFemale /> : <IconInActiveFemale />}
        </button>
        <button type="button" onClick={() => handleGenderClick("male")} className="cursor-pointer">
          {gender === "male" ? <IconActiveMale /> : <IconInActiveMale />}
        </button>
      </div>

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
