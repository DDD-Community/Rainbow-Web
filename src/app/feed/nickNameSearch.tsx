"use client";

import { useEffect, useState } from "react";
import NoResult from "src/components/noResult";
import { EmojiProfile } from "@/src/components/emojiProfile";
import { PersonProfile } from "@/src/components/personProfile";
import IconPlus from "public/assets/images/icons/plus";
import IconCheck from "public/assets/images/icons/check";
import { authInstance } from "@/src/api/auth/client";

interface NickNameSearchAreaProps {
  searchWord: string;
}
export default function NickNameSearchArea({ searchWord = "" }: NickNameSearchAreaProps) {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    if (!!searchWord === false) {
      return;
    }

    authInstance
      .get("/members/search", {
        params: {
          nickname: searchWord
        },
        headers: {
          Authorization:
            "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwia2FLYW9JZCI6MCwiaWF0IjoxNjk0MTgxOTk4LCJleHAiOjE2OTYzMjk0ODJ9.r4kN14fe0ChUCoSLeR6hwr2JY8YXIXIALP_c_70IJjKU_slDVmpPlh4f75Bv0siOa7StL3auZToQN58Z2cd95A"
        }
      })
      .then((response: any) => {
        if (response.data.message === "ok") {
          setSearchList(response.data.data);
        }
      });
  }, [searchWord]);

  return (
    <div className="w-full h-full">
      {searchList.length ? (
        <div className="flex flex-col gap-2">
          {searchList.map(searchItem => {
            const { memberId, isFriend, nickName } = searchItem;
            return isFriend ? (
              <FriendAccount key={memberId} nickName={nickName} />
            ) : (
              <NotFriendAccount key={memberId} nickName={nickName} />
            );
          })}
        </div>
      ) : (
        <div className="mt-[44px]">
          <NoResult descriptions={["해당 닉네임과 동일한", "친구를 찾지 못했습니다"]} />
        </div>
      )}
    </div>
  );
}

interface AccountProps {
  profileType?: any;
  nickName: string;
  onClickAddFriend?: () => void;
}

function NotFriendAccount({
  profileType = "",
  nickName = "",
  onClickAddFriend = () => {}
}: AccountProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-2.5 flex items-center w-full bg-gray-50 rounded-[10px] py-2 px-4 border border-black/[0.03]">
      {profileType === "" ? <EmojiProfile /> : <PersonProfile />}
      <span className="sb-13-600">{nickName}</span>
      <button type="button" className="cursor-pointer" onClick={onClickAddFriend}>
        <IconPlus width={18} height={18} fill="#5E6066" />
      </button>
    </div>
  );
}

function FriendAccount({
  profileType = "",
  nickName = "",
  // eslint-disable-next-line
  onClickAddFriend = () => {}
}: AccountProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] gap-2.5 flex items-center w-full bg-primary-bg-disabled rounded-[10px] py-2 px-4 border border-primary-disabled">
      {profileType === "" ? <EmojiProfile /> : <PersonProfile />}
      <span className="sb-13-600">{nickName}</span>
      <IconCheck width={18} height={18} fill="#FF5B29" />
    </div>
  );
}
