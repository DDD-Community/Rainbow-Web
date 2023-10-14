import Image from "next/image";
import { ReactNode, Fragment } from "react";
import { EmojiProfile } from "@/src/components/emojiProfile";
import PlusIcon from "@/public/assets/images/icons/plus";
import { FeedUserCardTag } from "@/types";
import { SubTag, SecondaryTag } from "../tag";
import { FeedCard, FeedCardProps } from "./feedCard";

const EXPENSE_BUDDY_TAG_TEXT = "지출 또래 친구";
const AGE_BUDDY_TAG_TEXT = "나이 또래 친구";
const SALARY_BUDDY_TAG_TEXT = "연봉 또래 친구";
const POPULAR_EXPENSES_TAG_TEXT = "인기 지출";

export interface UserFeedCardProps extends FeedCardProps {
  imagePath?: string;
  nickName: string;
  isFriend?: boolean;
  status?: FeedUserCardTag;
}

export function UserFeedCard({
  imagePath = "",
  nickName = "",

  title = "",
  price = 0,
  content = "",
  imageSrcArray = [],
  emojiList = [],
  isFriend = false,
  status = "normal",

  onClickPlusButton
}: UserFeedCardProps) {
  return (
    <UserFeedContainer>
      <UserFeedHeader>
        <UserFeedProfile imagePath={imagePath} isFriend={isFriend} />
        <UserFeedInfo nickName={nickName} status={status} />
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
  return <>{children}</>;
}
function UserFeedProfile({
  imagePath = "",
  isFriend = true
}: {
  imagePath?: string;
  isFriend?: boolean;
}) {
  return (
    <div className="flex items-center shrink-0">
      {imagePath ? (
        <div className="relative w-[36px] h-[36px] bg-gray-400 rounded-[50%]">
          <Image
            src={imagePath}
            width={36}
            height={36}
            className="w-full h-full object-cover"
            alt="profile image"
            unoptimized
          />
          {isFriend === false && (
            <div className="flex items-center justify-center absolute w-3.5 h-3.5 bottom-[-5px] left-1/2 translate-x-[-50%] rounded-[50%] bg-primary-default">
              <PlusIcon width={10} height={10} fill="#fff" />
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-[36px] h-[36px] rounded-[50%]">
          <EmojiProfile />
          {isFriend === false && (
            <div className="flex items-center justify-center absolute w-3.5 h-3.5 bottom-[-5px] left-1/2 translate-x-[-50%] rounded-[50%] bg-primary-default">
              <PlusIcon width={10} height={10} fill="#fff" />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function UserFeedInfo({
  nickName = "",
  status = "normal"
}: {
  nickName: string;
  status: FeedUserCardTag;
}) {
  return (
    <div className="flex items-center gap-2 pl-1">
      <div className="flex flex-col direction-row gap-0.5">
        <span className="sb-13-600 text-gray-700">{nickName}</span>
        <div className="flex gap-0.5">
          {convertTag(status)}
        </div>
      </div>
    </div>
  );
}

function PopularExpensesTag() {
  return <SecondaryTag>{POPULAR_EXPENSES_TAG_TEXT}</SecondaryTag>;
}

function ExpenseBuddyTag() {
  return <SubTag>{EXPENSE_BUDDY_TAG_TEXT}</SubTag>;
}
function AgeBuddyTag() {
  return <SubTag>{AGE_BUDDY_TAG_TEXT}</SubTag>;
}
function SalaryBuddyTag() {
  return <SubTag>{SALARY_BUDDY_TAG_TEXT}</SubTag>;
}

const convertTag = (status: FeedUserCardTag) => {
  switch (status) {
    case "hot":
      return <PopularExpensesTag />;
    case "expense":
      return <ExpenseBuddyTag />;
    case "age":
      return <AgeBuddyTag />;
    case "salary":
      return <SalaryBuddyTag />;
    default:
      return <></>;
  }
};

function GridEmptyArea() {
  return <div />;
}
