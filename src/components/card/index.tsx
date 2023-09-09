import Image from "next/image";
import { EmojiTypes } from "@/types";
import IconAngry from "@/public/assets/images/emotion/angry";
import IconHappy from "@/public/assets/images/emotion/happy";
import IconSad from "@/public/assets/images/emotion/sad";
import IconSurprised from "@/public/assets/images/emotion/surprised";
import IconThinking from "@/public/assets/images/emotion/thinking";
import IconEmotionPlus from "@/public/assets/images/emotion/plus";
import { addCommasToNumber } from "@/src/types/utils/utils";

export interface CardHeaderProps {
  title: string;
  price: number;
  onClick?: () => void;
}
export function CardHeader({ title = "", price = 0, onClick }: CardHeaderProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <h3 className="m-13-500 text-gray-700">{title}</h3>
      <div className="flex gap-2">
        <div className="flex items-center px-2.5 rounded-md border border-[#AAAAAA] text-[#5E6066] r-12-500">{`${addCommasToNumber(
          price
        )}원`}</div>
        <div className="w-6 h-6">
          <button type="button" className="cursor-pointer" onClick={onClick}>
            <IconEmotionPlus width={24} height={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export interface CardContentProps {
  content: string;
}
export function CardContent({ content = "" }: CardContentProps) {
  return (
    <div className="mt-2">
      <p className="text-[#5E6066] m-12-400">{content}</p>
    </div>
  );
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
      {emojiList.map((emojiType: EmojiTypes, index) => (
        <div key={index} className="w-[30px] h-[30px]">
          {convertEmotionIcon(emojiType)}
          {/* <Image src={convertEmotionIcon(emojiType)} alt={`emotion ${emojiType} icon`} /> */}
        </div>
      ))}
    </div>
  );
}

const convertEmotionIcon = (emotionType: EmojiTypes) => {
  switch (emotionType) {
    case "angry":
      return <IconAngry />;
    case "happy":
      return <IconHappy />;
    case "sad":
      return <IconSad />;
    case "surprised":
      return <IconSurprised />;
    case "thinking":
      return <IconThinking />;
    default:
      return <IconEmotionPlus />;
  }
};
