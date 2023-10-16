"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { twMerge } from "@/src/types/utils/tailwind.util";
import { instance } from "@/src/api/auth/apis";
import {
  // emailState,
  idState,
  domainState
} from "@/src/recoil/user.atoms";
import { DomainTypes } from "types.d";

// eslint-disable-next-line
const emailRegex = new RegExp(
  `([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])`
);

const ERROR_EMAIL_DEFAULT_MESSAGE = "사용할 수 없는 이메일이에요.";
const ERROR_EMAIL_DUPLICATED_MESSAGE = "이미 가입된 이메일이에요.";

const DOMAINS: DomainTypes[] = ["naver.com", "daum.net", "google.com"];

export default function Email() {
  const router = useRouter();

  const [isMailSelect, setIsMailSelect] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [id, setId] = useRecoilState(idState);
  const [domain, setDomain] = useRecoilState(domainState);

  const handleNextButton = () => {
    const email = `${id}@${domain}`;

    const isEmailValidate = emailRegex.test(email);
    if (isEmailValidate === false) {
      setErrorMessage(ERROR_EMAIL_DEFAULT_MESSAGE);
      return;
    }
    instance.get(`/members/email/check?email=${encodeURIComponent(email)}`).then(res => {
      const { data } = res;
      const {isDuplicated} = data.data;
      if (isDuplicated) {
        setErrorMessage(ERROR_EMAIL_DUPLICATED_MESSAGE);
      } else {
        setErrorMessage("");
        router.push("/onboarding/nickname");
      }
    });
  };

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => setId(e.target.value);
  const handleSelect = () => setIsMailSelect(prev => !prev);

  const handleClickDomain = (domainParam: DomainTypes) => setDomain(domainParam);

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex flex-col items-start h-full min-h-[320px] pt-20 pb-10">
        <div className="flex flex-col gap-2">
          <span className="sb-25-600">📧</span>
          <p className="sb-25-600 text-gray-700">
            본인 이메일이 맞다면 <br />
            아래 확인 버튼을 눌러주세요
          </p>
        </div>

        <div className="relative w-full mt-[44px]">
          <div className="relative w-full">
            <input
              type="text"
              value={id}
              className={twMerge(
                "w-full h-[52px] py-[15px] pl-4 pr-[72px] rounded-[10px] border outline-none",
                errorMessage
                  ? "border-primary-default shadow-[0_0_0_4px_rgba(255,91,41,0.1)]"
                  : "border-gray-200"
              )}
              placeholder="이메일"
              maxLength={20}
              onChange={handleChangeId}
            />

            <button
              type="button"
              className="absolute right-[16px] top-1/2 translate-y-[-50%] text-primary-default m-16-500"
              onClick={handleSelect}
            >
              {domain === "" ? "@선택" : `@ ${domain}`}
            </button>
          </div>

          <p className="absolute bottom-[-24px] m-12-500 text-primary-default ml-[10px]">
            {errorMessage}
          </p>

          {isMailSelect && (
            <div className="absolute w-full p-1.5 rounded-[10px] border border-gray-200 bg-white">
              {DOMAINS.map((domainItem: DomainTypes) => (
                  <button
                    type="button"
                    className="w-full h-[46px] px-4 py-3 r-16-400 rounded-[10px] text-left hover:bg-gray-50"
                    onClick={() => {
                      handleSelect();
                      handleClickDomain(domainItem);
                    }}
                  >
                    {domainItem}
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>

      <ButtonField className="py-0">
        <PrimaryButton
          color="default"
          size="large"
          className="w-[78px] h-[46px]"
          onClick={handleNextButton}
        >
          확인
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}
