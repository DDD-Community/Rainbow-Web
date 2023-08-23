"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { emailState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { SelectEmail } from "@/src/components/Common/Select/SelectEmail";
import { EMAIL } from "@/src/constant/select.constant";

export default function Email() {
  const [email, setEmail] = useState("");
  const setEmailRecoil = useSetRecoilState(emailState);

  const handleNext = () => {
    setEmailRecoil(email);
    window.location.replace("/member/onboarding/nickname");
  };
  const handleSelectChange = (combinedValue: string) => {
    setEmail(combinedValue);
  };

  const canActiveNextButton = Boolean(!email);

  return (
    <div className="flex flex-col justify-between h-screen gap-[26px] px-4 py-10">
      <div className="flex flex-col pt-20">
        <span>📧</span>
        <span className="sb-25-600 text-gray-700">
          본인 이메일이 맞다면 <br />
          아래 확인 버튼을 눌러주세요
        </span>
      </div>
      <SelectEmail options={EMAIL} onChange={handleSelectChange} />

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
