import Image from "next/image";
import IconPlus from "assets/images/icons/plus.svg";
import IconChecked from "assets/images/icons/checked.svg";

const TEXT_USER_STATE = "새로 가입한 또래친구";

type userStateTypes = "new";
interface UserCardProps {
  nickName: string;
  userImage?: string;
  userState?: userStateTypes;
  isChecked?: boolean;
}

function UserCard({
  nickName = "홍길동",
  userImage = "",
  userState = "new",
  isChecked = false
}: UserCardProps) {
  return (
    <div
      className={`flex items-center gap-2.5	w-full h-[60px] ${
        isChecked ? "bg-primary-bg-disabled" : "bg-gray-50"
      } rounded-10 border ${
        isChecked ? "border-primary-disabled" : "border-black/[0.03]"
      } pl-[16px] pr-[22px]`}
    >
      {/* user image */}
      <div
        className="shrink-0 flex justify-center w-10 h-10 rounded-[50%] border-black/[0.03] bg-gray-300"
      >
        <Image src={userImage} alt="" />
      </div>

      {/* category Text */}
      <div className="flex flex-col gap-0.5 w-full">
        <span className="text-gray-700 sb-13-600">{nickName}</span>
        <span className="text-gray-500 m-11-500">{userState === "new" ? TEXT_USER_STATE : ""}</span>
      </div>

      {/* plus icon */}
      <Image
        src={isChecked ? IconChecked : IconPlus}
        className="cursor-pointer"
        alt={`${isChecked ? "checked" : "plus"} icon`}
      />
    </div>
  );
}
export default UserCard;
