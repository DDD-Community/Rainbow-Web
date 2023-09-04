"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import { nickNameState, userFormState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import UserCard from "@/src/components/userCard";
import { authInstance } from "@/src/api/auth/client";

export default function Following() {
  const nicknameValue = useRecoilValue(nickNameState);
  const userFormValue = useRecoilValue(userFormState);

  const fetchAuth = () => authInstance.post(`/members/signUp`, userFormValue);

  const handleNext = async () => {
    fetchAuth().then(response => {
      const JWT = response.data.accessToken;
      if (JWT) {
        localStorage.setItem("EXIT_LOGIN_TOKEN", JWT);
        console.log("로그인 성공");
      }
    });
    console.log(`${nicknameValue}님 정보 등록이 완료 되었습니다.`);
  };
  return (
    <div className="w-343 flex flex-col justify-center">
      <div className="flex flex-col items-start pt-20 pb-10">
        <div>🙌</div>
        <div className="sb-25-600 text-gray-700">
          또래 친구와
          <br />
          친구를 맺어보세요
        </div>
        <div className="r-12-400 text-gray-600">
          내 데이터에 따라 나이와 연봉이 비슷한 친구들을 추천드려요.
        </div>
      </div>
      <div>
        <UserCard nickName="왕보리" userImage="" userState="new" isChecked />
      </div>
      <ButtonField>
        <PrimaryButton color="default" size="large" onClick={handleNext}>
          시작하기
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}
