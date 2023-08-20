import Image from "next/image";
import { addCommasToNumber } from "utils/utils";
import {
  IconAngry,
  IconHappy,
  IconSad,
  IconSurprised,
  IconThinking,
  IconEmotionPlus
} from "@/assets/images/emotion";
import { EmojiTypes } from "@/types";

export interface CardHeaderProps {
  title: string;
  price: number;
  onClick?: () => void;
}
export function CardHeader({ title = "", price = 0, onClick }: CardHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full mb-2">
      <h3 className="m-13-500 text-gray-700">{title}</h3>
      <div className="flex gap-2">
        <div className="flex items-center px-2.5 rounded-md border border-[#AAAAAA] text-[#5E6066] r-12-500">{`${addCommasToNumber(
          price
        )}원`}</div>
        <div className="w-6 h-6">
          <Image
            src={IconEmotionPlus}
            className="cursor-pointer"
            onClick={onClick}
            alt="emotion plus icon"
          />
        </div>
      </div>
    </div>
  );
}

export interface CardContentProps {
  content: string;
}
export function CardContent({ content = "" }: CardContentProps) {
  return <p className="text-[#5E6066] m-12-400">{content}</p>;
}

export interface CardThumbnailProps {
  imageSrc: string;
}
export function CardThumbnail({ imageSrc = "" }: CardThumbnailProps) {
  return (
    <div className="rounded-[10px] w-full h-[150px] overflow-hidden cursor-pointer">
      <Image src={imageSrc} className="w-full h-full object-cover" alt="user uploaded image" />
    </div>
  );
}

export interface CardEmojiBoardProps {
  className?: string;
  emojiList: EmojiTypes[];
}
export function CardEmojiBoard({ className = "", emojiList = [] }: CardEmojiBoardProps) {
  return (
    <div
      className={className.concat(
        " ",
        "flex flex-wrap gap-2 w-full min-h-[50px] px-3 py-2.5 border rounded-lg bg-[#F8F9FC]"
      )}
    >
      {emojiList.map((emojiType: EmojiTypes) => (
        <div className="w-[30px] h-[30px]">
          <Image src={convertEmotionIcon(emojiType)} alt={`emotion ${emojiType} icon`} />
        </div>
      ))}
    </div>
  );
}

const convertEmotionIcon = (emotionType: EmojiTypes) => {
  switch (emotionType) {
    case "angry":
      return IconAngry;
    case "happy":
      return IconHappy;
    case "sad":
      return IconSad;
    case "surprised":
      return IconSurprised;
    case "thinking":
      return IconThinking;
    default:
      return IconEmotionPlus;
  }
};
