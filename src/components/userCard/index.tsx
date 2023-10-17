import Image from "next/image";
import { twMerge } from "tailwind-merge";
// import { IconPlusSmall, IconCheckedSmall } from "@/public/assets/images/icons";
import IconPlusSmall from "@/public/assets/images/icons/plus";
import IconCheckedSmall from "@/public/assets/images/icons/check";
import { EmojiProfile } from "../emojiProfile";

interface UserCardProps {
  nickName: string;
  userImage?: string;
  subTitle?: string;
  isChecked?: boolean;
  className?: string;
  onClickPlusButton?: () => void;
}

function UserCard({
  nickName = "홍길동",
  userImage = "",
  subTitle = "new",
  isChecked = false,
  className,
  onClickPlusButton = () => {}
}: UserCardProps) {
  return (
    <div
      className={twMerge(
        `flex items-center gap-2.5	w-full h-[60px] ${
          isChecked ? "bg-primary-bg-disabled" : "bg-gray-50"
        } rounded-10 border ${
          isChecked ? "border-primary-disabled" : "border-black/[0.03]"
        } pl-[16px] pr-[22px]`,
        className
      )}
    >
      {/* user image */}
      <div className="shrink-0 flex justify-center w-10 h-10 rounded-[50%] border-black/[0.03] bg-gray-300 overflow-hidden">
        {userImage ? (
          <Image src={userImage || ""} width="40" height="40" alt="user Image" unoptimized />
        ) : (
          <EmojiProfile size="40" />
        )}
      </div>

      {/* category Text */}
      <div className="flex flex-col gap-0.5 w-full">
        <span className="text-gray-700 sb-13-600">{nickName}</span>
        <span className="text-gray-500 m-11-500">{subTitle}</span>
      </div>

      {/* plus icon */}
      <button type="button" onClick={onClickPlusButton}>
        {isChecked ? <IconCheckedSmall fill="#FF5B29" /> : <IconPlusSmall fill="#5E6066" />}
      </button>
    </div>
  );
}
export default UserCard;
