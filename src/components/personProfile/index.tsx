import {
  ManProfileChris,
  WomanProfileNorah,
  WomanProfileJessi,
  WomanProfileEsther,
  ManProfileAlvin
} from "@/public/assets/images/profile/person";
import Profile, { BottomIconTypes } from "../profile";

type PersonProfileTypes = "chris" | "norah" | "jessi" | "esther" | "alvin";

interface PersonProfileProps {
  type?: PersonProfileTypes;
  bottomIconType?: BottomIconTypes;
}
export function PersonProfile({ type = "chris", bottomIconType = "none" }: PersonProfileProps) {
  return (
    <Profile bottomIconType={bottomIconType}>
      <PersonPortraitImage type={type} />
    </Profile>
  );
}

function PersonPortraitImage({ type }: { type?: PersonProfileTypes }) {
  switch (type) {
    case "chris":
      return <ManProfileChris />;
    case "norah":
      return <WomanProfileNorah />;
    case "jessi":
      return <WomanProfileJessi />;
    case "esther":
      return <WomanProfileEsther />;
    case "alvin":
      return <ManProfileAlvin />;
    default:
      return <ManProfileChris />;
  }
}
