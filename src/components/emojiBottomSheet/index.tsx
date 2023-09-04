"use client";

import React from "react";
import BottomSheet, { BottomSheetProps } from "@/src/components/bottomSheet";

import IconAngry from "@/public/assets/images/emotion/angry";
import IconHappy from "@/public/assets/images/emotion/happy";
import IconSad from "@/public/assets/images/emotion/sad";
import IconSurprised from "@/public/assets/images/emotion/surprised";
import IconThinking from "@/public/assets/images/emotion/thinking";

import { EmojiTypes } from "types";

const emojiIcons: { [key in EmojiTypes]: React.ReactNode } = {
  angry: <IconAngry />,
  happy: <IconHappy />,
  sad: <IconSad />,
  surprised: <IconSurprised />,
  thinking: <IconThinking />
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
        {emojiKeys.map((key, index) => {
          const emojiName = key as EmojiTypes;

          return (
            <button
              type="button"
              key={index}
              className="cursor-pointer"
              onClick={() => onClickEmoji(emojiName)}
            >
              {convertEmotionIcon(emojiName)}
            </button>
          );
        })}
      </div>
    </BottomSheet>
  );
}

const convertEmotionIcon = (emotionType: EmojiTypes) => {
  switch (emotionType) {
    case "angry":
      return <IconAngry width={56} height={56} />;
    case "happy":
      return <IconHappy width={56} height={56} />;
    case "sad":
      return <IconSad width={56} height={56} />;
    case "surprised":
      return <IconSurprised width={56} height={56} />;
    case "thinking":
      return <IconThinking width={56} height={56} />;
    default:
      return <IconAngry width={56} height={56} />;
  }
};
