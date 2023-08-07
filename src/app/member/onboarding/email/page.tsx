"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { emailState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { TextInput } from "@/src/components/Common/Input";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { Select } from "@/src/components/Common/Select";

const EMAIL = [
  {
    value: "naver.com",
    name: "naver.com"
  },
  { value: "daum.net", name: "daum.net" },
  { value: "google.com", name: "google.com" }
];

export default function Email() {
  const [email, setEmail] = useState("");
  const setEmailRecoil = useSetRecoilState(emailState);

  const handleNext = () => {
    setEmailRecoil(email);
    window.location.replace("/member/onboarding/nickname");
  };
  const handleSelectChange = (selectedValue: string) => {
    console.log("Selected value:", selectedValue);
  };

  const canActiveNextButton = Boolean(!email);

  return (
    <div>
      <span className="sb-25-600 text-gray-700">
        본인 이메일이 맞다면 아래 확인 버튼을 눌러주세요
      </span>
      <TextInput>
        <TextInput.Border>
          <TextInput.Content value={email} onChange={e => setEmail(e.target.value)} />
          <Select options={EMAIL} onChange={handleSelectChange} />
        </TextInput.Border>
      </TextInput>
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
