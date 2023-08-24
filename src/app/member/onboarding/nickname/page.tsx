"use client";

import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { nicknameState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import { TextInput } from "@/src/components/Common/Input";
import { saveRecoilStateToSessionStorage } from "@/src/recoil/recoilSessionstorage";

export default function Nickname() {
  const [nickname, setNickname] = useRecoilState(nicknameState);
  const [isNicknameDuplicated, setIsNicknameDuplicated] = useState(false);

  useEffect(() => {
    async function checkNicknameDuplication() {
      if (nickname) {
        try {
          const response = await fetch(
            `/members/nickname/check?nickname=${encodeURIComponent(nickname)}`
          );
          const data = await response.json();
          setIsNicknameDuplicated(data.data.isDuplicated);
        } catch (error) {
          console.error("Error checking nickname duplication:", error);
        }
      }
    }

    checkNicknameDuplication();
  }, [nickname]);

  const handleNext = () => {
    saveRecoilStateToSessionStorage("nicknameState", nickname);
    window.location.replace("/member/onboarding/gender");
  };

  const canActiveNextButton = Boolean(!nickname || isNicknameDuplicated);

  return (
    <div className="flex flex-col justify-center">
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
            <TextInput.Content value={nickname} onChange={e => setNickname(e.target.value)} />
          </TextInput.Border>
        </TextInput>
      ) : (
        <TextInput>
          <TextInput.Border>
            <TextInput.Content value={nickname} onChange={e => setNickname(e.target.value)} />
          </TextInput.Border>
        </TextInput>
      )}
      {isNicknameDuplicated && (
        <div className="text-red-500 mt-2">이미 사용 중인 닉네임입니다.</div>
      )}
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
