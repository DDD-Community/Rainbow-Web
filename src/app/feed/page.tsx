"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

import EmojiBottomSheet from "@/src/components/emojiBottomSheet";
import { UserFeedCard } from "@/src/components/userFeedCard";
import SearchBar from "@/src/components/searchBar";
import { DividerHorizon } from "@/src/components/Common/Divider";
import useFooterNavBar from "@/src/hooks/useFooterNavBar";
import IconBack from "@/public/assets/images/icons/back";
import NoResultArea from "@/src/components/noResult";
import NickNameSearchArea from "./nickNameSearch";
import { feedHandler } from "./feedHandler";

export default function FeedPage() {
  useFooterNavBar({ open: true, type: "feed" });

  const [searchWord, setSearchWord] = useState("");
  const [isSearchNickNameFocus, setIsSearchNickNameFocus] = useState(false);

  const [isEmojiBottomSheet, setIsEmojiBottomSheet] = useState(false);
  // const [selectedExpenseId, setSelectedExpenseId] = useState(0);
  const [isScrollDown, setIsScrollDown] = useState(true);
  const [lastExpenseId, setLastExpenseId] = useState(0);
  const [userFeedList, setUserFeedList] = useState<any>([]);

  useEffect(() => {
    feedHandler(lastExpenseId).then(res => {
      const { data } = res;

      if (data.message === "ok") {
        setUserFeedList((prev: any) => [...prev, ...data.data]);

        // 친구 게시물이 없고 친구 아닌 게시물이 1개만 올 경우 무한스크롤 정지
        if (data.data.length <= 1) {
          setIsScrollDown(false);
        }
      }
    });
  }, [lastExpenseId]);

  const handleScrollDown = () => {
    if (isScrollDown) {
      const lastIndex = userFeedList.length - 2;
      const lastExpense: any = userFeedList[lastIndex];
      const {expenseId} = lastExpense.expenseResponse;
      setLastExpenseId(expenseId);
    }
  };

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
        <UserFeedUserListArea
          userFeedList={userFeedList}
          onChangeScroll={handleScrollDown}
          onClickPlusButton={openEmojiBottomSheet}
        />
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
  userFeedList: any;
  onClickPlusButton: () => void;
  onChangeScroll?: () => void;
}
function UserFeedUserListArea({
  userFeedList = [],
  onClickPlusButton = () => {},
  onChangeScroll = () => {}
}: FeedUserListAreaProps) {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      onChangeScroll();
    }
  }, [inView]);

  if (!!userFeedList.length === false) {
    return (
      <div className="mt-[44px]">
        <NoResultArea descriptions={["또래 친구가 올린", "지출 내역이 아직 없어요"]} />
      </div>
    );
  }

  return (
    <div>
      {userFeedList.map((userFeed: any, index: number) => {
        const {
          // memberId,
          nickName,
          expenseResponse
          // isFriend
        } = userFeed;

        const {
          amount,
          content,
          // date: expanseDate,
          // expenseId,
          imageList,
          reviewList
        } = expenseResponse;
        const memo = expenseResponse.memo ?? "";

        const isLast = userFeedList.length - 1 === index;

        if (isLast === false) {
          return (
            <div key={index}>
              <UserFeedCard
                nickName={nickName}
                title={content}
                price={amount}
                content={memo}
                imageSrcArray={imageList}
                emojiList={reviewList}
                onClickPlusButton={onClickPlusButton}
              />

              <div className="my-[18px]">
                <DividerHorizon />
              </div>
            </div>
          );
        } 
          return (
            <div key={index} ref={ref}>
              <UserFeedCard
                nickName={nickName}
                title={content}
                price={amount}
                content={memo}
                imageSrcArray={imageList}
                emojiList={reviewList}
                onClickPlusButton={onClickPlusButton}
              />
            </div>
          );
        
      })}
    </div>
  );
}
