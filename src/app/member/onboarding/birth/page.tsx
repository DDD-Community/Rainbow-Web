"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { birthdayState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { TextInput } from "@/src/components/Common/Input";

export default function Birth() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const setBirthRecoil = useSetRecoilState(birthdayState);

  const birth = year + month + date;

  const handleNext = () => {
    setBirthRecoil(birth);
    window.location.replace("/member/onboarding/salary");
  };

  const canActiveNextButton = Boolean(!birth);

  return (
    <div className="flex flex-col items-center">
      <h2>님의 생일을 입력해주세요</h2>
      <div className="flex justifycontent">
        <TextInput>
          <TextInput.Border>
            <TextInput.Content value={year} onChange={e => setYear(e.target.value)} />년
          </TextInput.Border>
        </TextInput>
        <TextInput>
          <TextInput.Border>
            <TextInput.Content value={month} onChange={e => setMonth(e.target.value)} />월
          </TextInput.Border>
        </TextInput>
        <TextInput>
          <TextInput.Border>
            <TextInput.Content value={date} onChange={e => setDate(e.target.value)} />일
          </TextInput.Border>
        </TextInput>
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
