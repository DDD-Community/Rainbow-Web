"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { checkingState, genderState, nickNameState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import {
  IconActiveFemale,
  IconActiveMale,
  IconInActiveFemale,
  IconInActiveMale
} from "@/public/assets/images/icons/gender";

export default function Gender() {
  const [gender, setGender] = useRecoilState(genderState);
  const nicknameValue = useRecoilValue(nickNameState);

  const checkingValue = useRecoilValue(checkingState);

  const handleGenderClick = (selectedGender: string) => {
    setGender(selectedGender);
  };

  const handleNext = () => {
    setGender(gender);
  };

  const canActiveNextButton = Boolean(!gender);

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex flex-col items-start gap-[44px] h-full min-h-[400px] pt-20 pb-10">
        <div className="flex flex-col gap-2">
          <span className="sb-25-600">💖</span>
          <p className="sb-25-600 text-gray-700 leading-[130%]">
            {nicknameValue}님의 <br />
            성별을 선택해주세요
          </p>
        </div>

        <div className="flex justify-around w-full">
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
      </div>

      <ButtonField className="py-0">
        <Link
          href={checkingValue ? "/onboarding/checking" : "/onboarding/birth"}
          className="w-full flex justify-end"
        >
          <PrimaryButton
            color="default"
            size="small"
            disabled={canActiveNextButton}
            onClick={handleNext}
          >
            확인
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
