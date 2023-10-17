"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { nickNameState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { twMerge } from "@/src/types/utils/tailwind.util";
import { instance } from "@/src/api/auth/apis";

const ERROR_NICKNAME_DEFAULT_MESSAGE = "사용할 수 없는 닉네임이에요";
const ERROR_NICKNAME_DUPLICATED_MESSAGE = "동일한 닉네임이 있어요";

// const nicknameRegex = new RegExp(`/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/`);
const nicknameRegex = /^[가-힣|a-z|A-Z|0-9|]+$/;

export default function Nickname() {
  const router = useRouter();
  const [nickname, setNickname] = useRecoilState(nickNameState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleNextButton = () => {
    const isNicknameValidate = nicknameRegex.test(nickname);

    console.log(isNicknameValidate);

    if (isNicknameValidate === false) {
      setErrorMessage(ERROR_NICKNAME_DEFAULT_MESSAGE);
      return;
    }
    instance.get(`/members/nickname/check?nickname=${encodeURIComponent(nickname)}`).then(res => {
      const { data } = res;
      const { isDuplicated } = data.data;
      if (isDuplicated) {
        setErrorMessage(ERROR_NICKNAME_DUPLICATED_MESSAGE);
      } else {
        setErrorMessage("");
        router.push("/onboarding/gender");
      }
    });
  };

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex flex-col items-start h-full min-h-[320px] pt-20 pb-10">
        <div className="flex flex-col gap-2">
          <span className="sb-25-600">😎</span>
          <p className="sb-25-600 text-gray-700 leading-[130%]">
            본인을 확인할 수 있는 <br />
            닉네임을 입력해주세요
          </p>
        </div>

        <div className="relative w-full mt-[44px]">
          <input
            type="text"
            value={nickname}
            className={twMerge(
              "w-full h-[52px] py-[15px] pl-4 pr-[72px] rounded-[10px] border outline-none",
              errorMessage
                ? "border-primary-default shadow-[0_0_0_4px_rgba(255,91,41,0.1)]"
                : "border-gray-200"
            )}
            placeholder="여기에 입력해주세요"
            maxLength={16}
            onChange={handleChangeNickName}
          />

          <p className="absolute bottom-[-24px] m-12-500 text-primary-default ml-[10px]">
            {errorMessage}
          </p>
        </div>
      </div>

      <ButtonField className="py-0">
        <PrimaryButton
          color="default"
          size="small"
          disabled={!nickname.length}
          onClick={handleNextButton}
        >
          확인
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}
