import Profile, { BottomIconTypes } from "components/profile";
import {
  EmojiProfileRed,
  EmojiProfileYellow,
  EmojiProfileGreen,
  EmojiProfileBlue,
  EmojiProfilePurple
} from "assets/images/profile/emoji";


type EmojiProfileTypes = "red" | "yellow" | "green" | "blue" | "purple";

interface EmojiProfileProps {
  type?: EmojiProfileTypes;
  bottomIconType?: BottomIconTypes;
}
export function EmojiProfile({ type = "red", bottomIconType = "none" }: EmojiProfileProps) {
  return (
    <Profile bottomIconType={bottomIconType}>
      <EmojiPortraitImage type={type} />
    </Profile>
  );
}

function EmojiPortraitImage({ type }: { type?: EmojiProfileTypes }) {
  switch (type) {
    case "red":
      return <EmojiProfileRed />;
    case "yellow":
      return <EmojiProfileYellow />;
    case "green":
      return <EmojiProfileGreen />;
    case "blue":
      return <EmojiProfileBlue />;
    case "purple":
      return <EmojiProfilePurple />;
    default:
      return <EmojiProfileRed />;
  }
}
