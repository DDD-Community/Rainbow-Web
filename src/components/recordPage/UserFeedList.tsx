import React from "react";
import { UserFeedCard } from "../userFeedCard";

const userFeedData = [
  {
    index: 0,
    nickName: "nickName",
    userTags: ["popular-expenses", "spending-buddy"],
    title: "바이바이 샐러드",
    price: 42000,
    content:
      "집 근처에 있는 샐러드 가게에 갔는데 안사먹을 수가 없었다...진짜 대박 맛집이었어...애들아 다들 먹어....ㅋㅋㅋ",
    imageSrcArray: [],
    emojiList: ["angry", "angry", "angry", "surprised", "sad"]
  },
  {
    index: 1,
    nickName: "nickName",
    title: "바이바이 샐러드",
    price: 42000,
    content: "",
    imageSrcArray: [],
    emojiList: ["angry", "angry", "angry", "surprised", "sad"]
  }
  // 추가 UserFeedCard 항목을 여기에 추가하세요
];
interface userFeedListProps {
  openEmojiBottomSheet: () => void;
}
function UserFeedList({ openEmojiBottomSheet }: userFeedListProps) {
  return (
    <div>
      {userFeedData.map(feed => (
        <UserFeedCard
          key={feed.index}
          className="h-auto w-full"
          nickName={feed.nickName}
          userTags={["popular-expenses", "spending-buddy"]}
          title={feed.title}
          price={feed.price}
          content={feed.content}
          imageSrcArray={feed.imageSrcArray}
          emojiList={["angry", "angry", "angry", "surprised", "sad"]}
          onClickPlusButton={openEmojiBottomSheet}
        />
      ))}
    </div>
  );
}

export default UserFeedList;
