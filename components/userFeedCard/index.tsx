import { ReactNode } from "react";
import { SubTag, SecondaryTag } from "components/tag";
import { FeedCard, FeedCardProps } from "./feedCard";

const SPENDING_BUDDY_TAG_TEXT = "지출 또래 친구";
const POPULAR_EXPENSES_TAG_TEXT = "인기 지출";

type UserTagsType = "popular-expenses" | "spending-buddy";

export interface UserFeedCardProps extends FeedCardProps {
  nickName: string;
  userTags?: UserTagsType[];
}

export function UserFeedCard({
  nickName = "",
  userTags = ["spending-buddy"],

  title = "",
  price = 0,
  content = "",
  imageSrcArray = [],
  emojiList = [],

  onClickPlusButton
}: UserFeedCardProps) {
  return (
    <UserFeedContainer>
      <UserFeedHeader>
        <UserFeedProfile />
        <UserFeedInfo nickName={nickName} userTags={userTags} />
      </UserFeedHeader>

      <GridEmptyArea />

      <FeedCard
        title={title}
        price={price}
        content={content}
        imageSrcArray={imageSrcArray}
        emojiList={emojiList}
        onClickPlusButton={onClickPlusButton}
      />
    </UserFeedContainer>
  );
}

function UserFeedContainer({ children }: { children?: ReactNode }) {
  return (
    <article className="grid grid-cols-[36px_auto] grid-rows-[40px_auto] w-full h-auto gap-1 gap-y-2">
      {children}
    </article>
  );
}

function UserFeedHeader({ children }: { children?: ReactNode }) {
  return <>{children}</>
}
function UserFeedProfile() {
  return (
    <div className="flex items-center shrink-0">
      <div className="w-[36px] h-[36px] bg-gray-400 rounded-[50%]" />
    </div>
  );
}

function UserFeedInfo({
  nickName = "",
  userTags = []
}: {
  nickName: string;
  userTags: UserTagsType[];
}) {
  return (
    <div className="flex items-center gap-2 pl-1">
      <div className="flex flex-col direction-row gap-0.5">
        <span className="sb-13-600 text-gray-700">{nickName}</span>
        <div className="flex gap-0.5">{userTags.map(userTag => convertTag(userTag))}</div>
      </div>
    </div>
  );
}

function PopularExpensesTag() {
  return <SecondaryTag>{POPULAR_EXPENSES_TAG_TEXT}</SecondaryTag>;
}

function SpendingBuddyTag() {
  return <SubTag>{SPENDING_BUDDY_TAG_TEXT}</SubTag>;
}

const convertTag = (userTag: UserTagsType) => {
  switch (userTag) {
    case "popular-expenses":
      return <PopularExpensesTag />;
    case "spending-buddy":
      return <SpendingBuddyTag />;
    default:
      return <SpendingBuddyTag />;
  }
};

function GridEmptyArea() {
  return <div />;
}
