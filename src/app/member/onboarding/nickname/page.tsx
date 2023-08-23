"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { nicknameState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { TextInput } from "@/src/components/Common/Input";

export default function Nickname() {
  const [nickname, setNickname] = useState("");
  const setNicknameRecoil = useSetRecoilState(nicknameState);

  const handleNext = () => {
    setNicknameRecoil(nickname);
    window.location.replace("/member/onboarding/gender");
  };

  const canActiveNextButton = Boolean(!nickname);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>😎</div>
        <div className="sb-25-600 text-gray-700">
          본인을 확인할 수 있는 <br />
          닉네임을 입력해주세요
        </div>
      </div>
      <TextInput>
        <TextInput.Border>
          <TextInput.Content value={nickname} onChange={e => setNickname(e.target.value)} />
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
