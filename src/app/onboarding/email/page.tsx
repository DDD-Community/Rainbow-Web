"use client";

import Link from "next/link"; // Link 컴포넌트 임포트
import { useState } from "react";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { SelectEmail } from "@/src/components/Common/Select/SelectEmail";
import { EMAIL } from "@/src/constant/select.constant";

export default function Email() {
  const [active, setActive] = useState(false);

  const handleSelectChange = (combinedValue: string) => {
    setActive(!combinedValue);
  };

  const canActiveNextButton = active;

  return (
    <div className="w-343 flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>📧</div>
        <div className="sb-25-600 text-gray-700">
          본인 이메일이 맞다면 <br />
          아래 확인 버튼을 눌러주세요
        </div>
      </div>
      <SelectEmail options={EMAIL} onChange={handleSelectChange} />

      <ButtonField>
        <Link href="/onboarding/nickname" className="w-full flex justify-end">
          <PrimaryButton color="default" size="small" disabled={canActiveNextButton}>
            확인
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
