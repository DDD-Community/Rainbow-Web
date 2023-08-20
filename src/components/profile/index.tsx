import { ReactNode } from "react";

import PlusIcon from "assets/images/icons/plus";
import CheckIcon from "assets/images/icons/check";

export type BottomIconTypes = "plus" | "check" | "none";

interface ProfileProps {
  children: ReactNode;
  bottomIconType?: BottomIconTypes;
}
export default function Profile({ children, bottomIconType = "none" }: ProfileProps) {
  return (
    <div className="relative">
      {children}
      {bottomIconType !== "none" && <BottomSheetIcon bottomIconType={bottomIconType} />}
    </div>
  );
}

function BottomSheetIcon({ bottomIconType }: { bottomIconType?: BottomIconTypes }) {
  switch (bottomIconType) {
    case "plus":
      return <PlusCircle />;
    case "check":
      return <CheckCircle />;
    default:
      return <PlusCircle />;
  }
}

function PlusCircle() {
  return (
    <div className="flex items-center justify-center absolute w-3.5 h-3.5 bottom-[-5px] left-1/2 translate-x-[-50%] rounded-[50%] bg-primary-default">
      <PlusIcon width={10} height={10} fill="#fff" />
    </div>
  );
}

function CheckCircle() {
  return (
    <div className="flex items-center justify-center absolute w-3.5 h-3.5 bottom-[-5px] left-1/2 translate-x-[-50%] rounded-[50%] bg-white">
      <CheckIcon width={10} height={10} fill="#FF5B29" />
    </div>
  );
}
