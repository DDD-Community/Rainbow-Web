"use client";

import { useState } from "react";

import EmojiBottomSheet from "@/src/components/emojiBottomSheet";
import { UserFeedCard } from "@/src/components/userFeedCard";
import SearchBar from "@/src/components/searchBar";
import { DividerHorizon } from "@/src/components/Common/Divider";

import useFooterNavBar from "@/src/hooks/useFooterNavBar";

export default function FeedPage() {
  useFooterNavBar({ open: true, type: "feed" });

  const [searchWord, setSearchWord] = useState("");

  const [isEmojiBottomSheet, setIsEmojiBottomSheet] = useState(false);

  const openEmojiBottomSheet = () => setIsEmojiBottomSheet(true);
  const closeEmojiBottomSheet = () => setIsEmojiBottomSheet(false);

  return (
    <main className="flex flex-col gap-5 pt-3.5 px-4 pb-5">
      {/* Search Area */}
      <div className="flex gap-3">
        <SearchBar value={searchWord} onChange={e => setSearchWord(e.target.value)} />
      </div>

      <div>
        <UserFeedCard
          nickName="닉네임"
          title="바이바이 샐러드"
          price={42000}
          content=""
          imageSrcArray={[]}
          emojiList={[]}
          onClickPlusButton={openEmojiBottomSheet}
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
          onClickPlusButton={openEmojiBottomSheet}
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
          onClickPlusButton={openEmojiBottomSheet}
        />
      </div>

      <section />

      <EmojiBottomSheet
        open={isEmojiBottomSheet}
        onDismiss={closeEmojiBottomSheet}
        onClickEmoji={openEmojiBottomSheet}
      />
    </main>
  );
}
