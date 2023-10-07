"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";
import { checkingState, nickNameState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { TextInput } from "@/src/components/Common/Input";
import { instance } from "@/src/api/auth/apis";

export default function Nickname() {
  const [nickname, setNickname] = useRecoilState(nickNameState);
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);
  const checkingValue = useRecoilValue(checkingState);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function checkNicknameDuplication() {
      if (nickname && nickname.length <= 16) {
        // 닉네임 길이 확인
        try {
          const response = instance.get(
            `/members/nickname/check?nickname=${encodeURIComponent(nickname)}`
          );
          const data = await response;
          setIsNicknameDuplicated(data.data.isDuplicated);
        } catch (error) {
          console.error("Error checking nickname duplication:", error);
        }
      }
    }

    checkNicknameDuplication();
  }, [nickname]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    if (input.length <= 16) {
      setErrorMessage("");
    } else {
      setErrorMessage("닉네임은 16자 이하여야 합니다.");
    }
    setNickname(input);
  };

  const handleNext = () => {
    setNickname(nickname);
  };

  const canActiveNextButton = Boolean(!nickname || isNicknameDuplicated || errorMessage);

  return (
    <div className="w-343 flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>😎</div>
        <div className="sb-25-600 text-gray-700">
          본인을 확인할 수 있는 <br />
          닉네임을 입력해주세요
        </div>
      </div>
      {isNicknameDuplicated ? (
        <TextInput>
          <TextInput.Border errorMessage="동일한 닉네임이 있어요">
            <TextInput.Content value={nickname} onChange={onChangeInput} />
          </TextInput.Border>
        </TextInput>
      ) : (
        <TextInput>
          <TextInput.Border errorMessage={errorMessage}>
            <TextInput.Content value={nickname} onChange={onChangeInput} />
          </TextInput.Border>
        </TextInput>
      )}
      <ButtonField>
        {checkingValue ? (
          <Link href="/onboarding/checking" className="w-full flex justify-end">
            <PrimaryButton
              color="default"
              size="small"
              disabled={canActiveNextButton}
              onClick={handleNext}
            >
              확인
            </PrimaryButton>
          </Link>
        ) : (
          <Link href="/onboarding/gender" className="w-full flex justify-end">
            <PrimaryButton
              color="default"
              size="small"
              disabled={canActiveNextButton}
              onClick={handleNext}
            >
              확인
            </PrimaryButton>
          </Link>
        )}
      </ButtonField>
    </div>
  );
}
