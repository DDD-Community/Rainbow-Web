"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { PrimaryButton } from "@/src/components/Common/Button";
import { ButtonField } from "@/src/components/Common/Button/ButtonField";
import UserCard from "@/src/components/userCard";
import { authInstance } from "@/src/api/auth/apis";
import * as queryKeys from "@/src/queries/queryKeys";
import { addMemberFollow } from "@/src/app/feed/feedHandler";

export async function fetchRecommendFriend() {
  const response = await authInstance.get(`/members/suggestedMemberList`);
  return response.data.data;
}

export default function Following() {
  const router = useRouter();

  const [addIdList, setAddIdList] = useState<number[]>([]);

  const { data } = useQuery(
    queryKeys.ONBOARDING_RECOMMEND_FRIEND_LIST(),
    () => fetchRecommendFriend(),
    { initialData: [] }
  );

  const handleNextButton = () => {
    router.push("/main");
  };

  const handleAddFriend = (id: number) => {
    addMemberFollow(id).then(() => {
      setAddIdList(prev => [...prev, id]);
    });
  };

  return (
    <div className="w-full h-full flex flex-col p-4">
      <div className="flex flex-col items-start h-auto pt-20">
        <div className="flex flex-col gap-2">
          <span className="sb-25-600">🙌</span>
          <p className="sb-25-600 text-gray-700 leading-[130%]">
            또래 친구와
            <br />
            친구를 맺어보세요
          </p>
        </div>

        <p className="r-12-400 text-gray-600 mt-[18px] mb-[28px]">
          내 데이터에 따라 나이와 연봉이 비슷한 친구들을 추천드려요.
        </p>

        <div className="flex flex-col w-full gap-2">
          {data.map((friendList: any) => {
            const { condition, members } = friendList;
            const subTitle = convertSubTitle(condition);

            return members.map((member: any) => {
              const { nickName, id, imagePath } = member;

              const isChecked = addIdList.indexOf(id) >= 0;
              return (
                <UserCard
                  key={id}
                  // className="m-[10px]"
                  subTitle={subTitle}
                  nickName={nickName}
                  userImage={imagePath}
                  onClickPlusButton={() => handleAddFriend(id)}
                  isChecked={isChecked}
                />
              );
            });
          })}
        </div>
      </div>

      <ButtonField className="py-0 mt-3">
        <PrimaryButton
          color="default"
          size="large"
          onClick={handleNextButton}
          disabled={addIdList.length === 0}
        >
          {`${addIdList.length}명 친구 맺고 시작하기`}
        </PrimaryButton>
      </ButtonField>
    </div>
  );
}

const convertSubTitle = (condition: any) => {
  if (condition === "age") {
    return "새로 가입한 나이 또래 친구";
  }
  if (condition === "salary") {
    return "새로 가입한 연봉 또래 친구";
  }
  if (condition === "expense") {
    return "새로 가입한 연봉 또래 친구";
  }
  if (condition === "recent") {
    return "최근에 새로 가입한 친구";
  }
  return "새로 가입한 나이 또래 친구";
};
