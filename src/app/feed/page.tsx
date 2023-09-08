"use client";

import { useState } from "react";

import EmojiBottomSheet from "@/src/components/emojiBottomSheet";
import { UserFeedCard } from "@/src/components/userFeedCard";
import SearchBar from "@/src/components/searchBar";
import { DividerHorizon } from "@/src/components/Common/Divider";
import useFooterNavBar from "@/src/hooks/useFooterNavBar";
import IconBack from "@/public/assets/images/icons/back";
import NickNameSearchArea from "./nickNameSearch";

export default function FeedPage() {
  useFooterNavBar({ open: true, type: "feed" });

  const [searchWord, setSearchWord] = useState("");
  const [isSearchNickNameFocus, setIsSearchNickNameFocus] = useState(false);

  const [isEmojiBottomSheet, setIsEmojiBottomSheet] = useState(false);

  const openEmojiBottomSheet = () => setIsEmojiBottomSheet(true);
  const closeEmojiBottomSheet = () => setIsEmojiBottomSheet(false);

  const handleInputFocus = () => setIsSearchNickNameFocus(true);
  const handleInputBlur = () => setIsSearchNickNameFocus(false);

  return (
    <main className="flex flex-col gap-5 pt-3.5 px-4 pb-5">
      {/* Search Area */}
      <div className="flex items-center gap-3">
        {isSearchNickNameFocus && (
          <button type="button" className="shrink-0" onClick={handleInputBlur}>
            <IconBack />
          </button>
        )}

        <SearchBar
          value={searchWord}
          onChange={e => setSearchWord(e.target.value)}
          onFocus={handleInputFocus}
          // onBlur={handleInputBlur}
        />
      </div>

      {isSearchNickNameFocus ? (
        <NickNameSearchArea searchWord={searchWord} />
      ) : (
        <UserFeedUserListArea onClickPlusButton={openEmojiBottomSheet} />
      )}

      <section />

      <EmojiBottomSheet
        open={isEmojiBottomSheet}
        onDismiss={closeEmojiBottomSheet}
        onClickEmoji={openEmojiBottomSheet}
      />
    </main>
  );
}

interface FeedUserListAreaProps {
  // userFeedList: any;
  onClickPlusButton: () => void;
}
function UserFeedUserListArea({
  // userFeedList = [],
  onClickPlusButton = () => {}
}: FeedUserListAreaProps) {
  return (
    <div>
      <UserFeedCard
        nickName="닉네임"
        title="바이바이 샐러드"
        price={42000}
        content=""
        imageSrcArray={[]}
        emojiList={[]}
        onClickPlusButton={onClickPlusButton}
      />

      <div className="my-[18px]">
        <DividerHorizon />
      </div>

      <UserFeedCard
        nickName="nickName"
        userTags={["popular-expenses", "spending-buddy"]}
        title="바이바이 샐러드"
        price={42000}
        content="집 근처에 있는 샐러드 가게에 갔는데 안사먹을 수가 없었다...진짜 대박 맛집이었어...애들아 다들 먹어....ㅋㅋㅋ"
        imageSrcArray={[]}
        emojiList={["angry", "angry", "angry", "surprised", "sad"]}
        onClickPlusButton={onClickPlusButton}
      />

      <div className="my-[18px]">
        <DividerHorizon />
      </div>

      <UserFeedCard
        nickName="nickName"
        title="바이바이 샐러드"
        price={42000}
        content=""
        imageSrcArray={[]}
        emojiList={["angry", "angry", "angry", "surprised", "sad"]}
        onClickPlusButton={onClickPlusButton}
      />
    </div>
  );
}
