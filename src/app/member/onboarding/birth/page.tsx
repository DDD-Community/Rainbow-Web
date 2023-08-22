"use client";

import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { TextInput } from "@/src/components/Common/Input";
import { birthDateState } from "@/src/recoil/user.atoms";

export default function Birth() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [date, setDate] = useState("");
  const setBirthRecoil = useSetRecoilState(birthDateState);

  const birthDate = `${year}-${month}-${date}`;

  const handleNext = () => {
    setBirthRecoil(birthDate);
    window.location.replace("/member/onboarding/salary");
  };

  const getInputValue = (label: string) => {
    if (label === "년") return year;
    if (label === "월") return month;
    if (label === "일") return date;
    return "";
  };

  const setInputValue = (label: string, value: string) => {
    if (label === "년") setYear(value);
    else if (label === "월") setMonth(value);
    else if (label === "일") setDate(value);
  };

  const canActiveNextButton = Boolean(!year || !month || !date);

  return (
    <div className="flex flex-col items-center">
      <h2>님의 생일을 입력해주세요</h2>
      <div className="flex gap-4">
        {["년", "월", "일"].map(label => (
          <TextInput key={label}>
            <TextInput.Border>
              <TextInput.Content
                value={getInputValue(label)}
                onChange={e => setInputValue(label, e.target.value)}
              />
              <div className="text-primary-default">{label}</div>
            </TextInput.Border>
          </TextInput>
        ))}
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
