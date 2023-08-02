"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { emailState } from "@/src/recoil/user.atoms";

export default function Email() {
  const [email, setEmail] = useState("");
  const setEmailRecoil = useSetRecoilState(emailState);

  const handleNext = () => {
    setEmailRecoil(email);
    window.location.replace("/member/onboarding/nickname");
  };

  const canActiveNextButton = Boolean(!email);

  return (
    <div>
      <h2>본인 이메일이 맞다면 아래 확인 버튼을 눌러주세요</h2>
      <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      <button type="button" disabled={canActiveNextButton} onClick={handleNext}>
        확인
      </button>
    </div>
  );
}
