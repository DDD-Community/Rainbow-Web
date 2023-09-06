"use client";

import React from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import { nickNameState } from "@/src/recoil/user.atoms";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import UserCard from "@/src/components/userCard";
// import { authInstance } from "@/src/api/auth/client";

export default function Following() {
  const nicknameValue = useRecoilValue(nickNameState);
  // useEffect(() => {
  //   const fetchAuth = () => authInstance.get(`/members/suggestedMemberList`);
  //   fetchAuth().then(response => {
  //     console.log(response.data);
  //     const followingData = response.data;
  //     if (followingData) console.log(followingData.members.nickName);
  //   });
  // }, []);

  const handleNext = async () => {
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
      <div className="flex flex-col">
        <UserCard className="m-[10px]" nickName="왕보리" userImage="" userState="new" isChecked />
        <UserCard className="m-[10px]" nickName="왕모리" userImage="" userState="new" />
        <UserCard className="m-[10px]" nickName="왕도리" userImage="" userState="new" isChecked />
      </div>
      <ButtonField>
        <Link href="/main" className="w-full">
          <PrimaryButton color="default" size="large" onClick={handleNext}>
            시작하기
          </PrimaryButton>
        </Link>
      </ButtonField>
    </div>
  );
}
