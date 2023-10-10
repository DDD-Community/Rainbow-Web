import {
  EmojiProfileRed,
  EmojiProfileYellow,
  EmojiProfileGreen,
  EmojiProfileBlue,
  EmojiProfilePurple
} from "@/public/assets/images/profile/emoji";
import Profile, { BottomIconTypes } from "../profile";

type EmojiProfileTypes = "red" | "yellow" | "green" | "blue" | "purple";

interface EmojiProfileProps {
  type?: EmojiProfileTypes;
  bottomIconType?: BottomIconTypes;
  size?: string;
}
export function EmojiProfile({
  type = "red",
  bottomIconType = "none",
  size = "36"
}: EmojiProfileProps) {
  return (
    <Profile bottomIconType={bottomIconType}>
      <EmojiPortraitImage type={type} size={size} />
    </Profile>
  );
}

function EmojiPortraitImage({ type, size }: { type?: EmojiProfileTypes; size?: string }) {
  switch (type) {
    case "red":
      return <EmojiProfileRed width={size} height={size} />;
    case "yellow":
      return <EmojiProfileYellow width={size} height={size} />;
    case "green":
      return <EmojiProfileGreen width={size} height={size} />;
    case "blue":
      return <EmojiProfileBlue width={size} height={size} />;
    case "purple":
      return <EmojiProfilePurple width={size} height={size} />;
    default:
      return <EmojiProfileRed width={size} height={size} />;
  }
}
