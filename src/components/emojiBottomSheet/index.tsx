"use client";

import React from "react";
import Image from "next/image";
import BottomSheet, { BottomSheetProps } from "@/src/components/bottomSheet";
import {
  IconAngry,
  IconHappy,
  IconSad,
  IconSurprised,
  IconThinking
} from "@/public/assets/images/emotion";
import { EmojiTypes } from "types";

const emojiIcons: { [key in EmojiTypes]: string } = {
  angry: IconAngry,
  happy: IconHappy,
  sad: IconSad,
  surprised: IconSurprised,
  thinking: IconThinking
};

interface EmojiTooltipModalProps extends BottomSheetProps {
  onClickEmoji: (emojiType: EmojiTypes) => void;
}

export default function EmojiTooltipModal({
  open = false,
  onDismiss,
  onClickEmoji
}: EmojiTooltipModalProps) {
  const emojiKeys = Object.keys(emojiIcons);
  return (
    <BottomSheet open={open} onDismiss={onDismiss}>
      <div className="flex items-center justify-center gap-3 mb-14">
        {emojiKeys.map(key => {
          const emojiName = key as EmojiTypes;
          const emojiImageSrc = emojiIcons[emojiName as EmojiTypes];

          return (
            <Image
              src={emojiImageSrc}
              className="w-14 h-14 cursor-pointer"
              onClick={() => onClickEmoji(emojiName)}
              alt={`${emojiName} emoji`}
            />
          );
        })}
      </div>
    </BottomSheet>
  );
}
