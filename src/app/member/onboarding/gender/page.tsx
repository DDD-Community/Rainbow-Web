"use client";

import { useRecoilState } from "recoil";
import { genderState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import {
  IconActiveFemale,
  IconActiveMale,
  IconInActiveFemale,
  IconInActiveMale
} from "@/public/assets/images/icons/gender";
import { saveRecoilStateToSessionStorage } from "@/src/recoil/recoilSessionstorage";

export default function Gender() {
  const [gender, setGender] = useRecoilState(genderState);

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleNext = () => {
    saveRecoilStateToSessionStorage("genderState", gender);
    window.location.replace("/member/onboarding/birth");
  };

  const canActiveNextButton = Boolean(!gender);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>💖</div>
        <div className="sb-25-600 text-gray-700">
          님의 <br />
          성별을 선택해주세요
        </div>
      </div>
      <div className="flex justify-around">
        <button
          type="button"
          onClick={() => handleGenderClick("male")}
          className="cursor-pointer sb-16-600"
        >
          {gender === "male" ? <IconActiveMale /> : <IconInActiveMale />} 남성
        </button>
        <button
          type="button"
          onClick={() => handleGenderClick("female")}
          className="cursor-pointer sb-16-600"
        >
          {gender === "female" ? <IconActiveFemale /> : <IconInActiveFemale />} 여성
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
