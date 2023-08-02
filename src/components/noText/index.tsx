import React from "react";
import Image from "next/image";
import { IconNoText } from "@/public/assets/images/emotion";

const NO_TEXT_DESCRIPTION = "또래 친구가 올린 지출 내역이 아직 없어요";

export default function NoText() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image src={IconNoText} alt="No Text Emotion Image" />
      <p className="text-center r-14-400 text-gray-600">{NO_TEXT_DESCRIPTION}</p>
    </div>
  );
}
