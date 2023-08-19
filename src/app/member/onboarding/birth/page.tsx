"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { birthdayState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";

export default function Birth() {
  const [birth, setBirth] = useState("");
  const setBirthRecoil = useSetRecoilState(birthdayState);

  const handleNext = () => {
    setBirthRecoil(birth);
    window.location.replace("/member/onboarding/salary");
  };

  const canActiveNextButton = Boolean(!birth);

  return (
    <div className="flex flex-col items-center">
      <h2>님의 생일을 입력해주세요</h2>
      <div>
        <input type="text" value={birth} onChange={e => setBirth(e.target.value)} />
      </div>
      <div>
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
    </div>
  );
}
