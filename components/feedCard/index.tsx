import Image from "next/image";
import { addCommasToNumber } from "utils/utils";
import { PrimaryTag } from "components/tag";
import { IconPlus } from "@/assets/images/icons";
import {
  IconAngry,
  IconHappy,
  IconSad,
  IconSuprised,
  IconThinking,
  IconEmotionPlus
} from "@/assets/images/emotion";

const DEFAULT_FEED_CARD_TAG = "나이 또래 친구";

// 반응 이모티콘 타입
type EmotionTypes = "angry" | "happy" | "sad" | "suprised" | "thinking";
/**
 * Feed Card
 */
export interface FeedCardProps {
  title: string;
  price: number;
  content: string;
  images?: string[];
  emotionTypes?: EmotionTypes[];
}
// 유저 정보가 포함 된 Feed Card
export interface UserFeedCardProps extends FeedCardProps {
  nickName: string;
  userType?: string;
}

export function FeedCard({
  title = "",
  price = 0,
  content = "",
  images = [],
  emotionTypes = []
}: FeedCardProps) {
  return (
    <div className="px-1">
      {/* summary */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="m-13-500">{title}</h3>
        <div className="flex gap-2">
          <div className="flex items-center px-2.5 rounded-md border border-[#AAAAAA] text-[#5E6066] r-12-500">{`${addCommasToNumber(
            price
          )}원`}</div>
          {/* 피드가 없을 때 플러스 아이콘 표출 */}
          {emotionTypes.length === 0 && (
            <div className="w-6 h-6">
              <Image src={IconEmotionPlus} className="cursor-pointer" alt="emotion plus icon" />
            </div>
          )}
        </div>
      </div>
      {/* content */}
      <p className="text-[#5E6066] m-12-400">{content}</p>

      {/* images */}
      {images.length !== 0 && (
        <div className="flex gap-2.5 my-2.5">
          {images.slice(0, 2).map(imageSrc => (
            <div className="rounded-[10px] w-full h-[150px] overflow-hidden">
              <Image src={imageSrc} className="h-full object-cover" alt="user uploaded image" />
            </div>
          ))}
        </div>
      )}

      {/* feed emotion */}
      {emotionTypes.length !== 0 && (
        <div className="flex flex-wrap gap-2 px-3 py-2.5 border rounded-lg bg-[#F8F9FC]">
          {emotionTypes.map(emotionType => (
            <div className="w-[30px] h-[30px]">
              <Image src={convertEmotionIcon(emotionType)} alt={`emotion ${emotionType} icon`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function UserFeedCard({
  nickName = "",
  userType = DEFAULT_FEED_CARD_TAG,

  title = "",
  price = 0,
  content = "",
  images = [],
  emotionTypes = []
}: UserFeedCardProps) {
  return (
    <article className="grid grid-cols-[36px_auto] grid-rows-[40px_auto] w-full h-auto gap-1 gap-y-2">
      {/* profile */}
      <div className="flex items-center shrink-0">
        <div className="w-[36px] h-[36px] bg-gray-400 rounded-[50%]" />
      </div>

      {/* user info */}
      <div className="flex justify-between items-center gap-2 pl-1">
        <div className="flex flex-col direction-row gap-0.5">
          <span className="sb-13-600 text-gray-700">{nickName}</span>
          <PrimaryTag>{userType}</PrimaryTag>
        </div>
        <div className="w-[18px] h-[18px]">
          <Image src={IconPlus} alt="plus icon" />
        </div>
      </div>
      {/* empty area */}
      <div />
      <FeedCard
        title={title}
        price={price}
        content={content}
        images={images}
        emotionTypes={emotionTypes}
      />
    </article>
  );
}

const convertEmotionIcon = (emotionType: EmotionTypes) => {
  switch (emotionType) {
    case "angry":
      return IconAngry;
    case "happy":
      return IconHappy;
    case "sad":
      return IconSad;
    case "suprised":
      return IconSuprised;
    case "thinking":
      return IconThinking;
    default:
      return IconHappy;
  }
};
