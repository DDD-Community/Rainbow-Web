"use client";

import React from "react";
import Image from "next/image";
import BottomSheet, { BottomSheetProps } from "@/components/bottomSheet";
import { IconAngry, IconHappy, IconSad, IconSuprised, IconThinking } from "assets/images/emotion";
import { EmojiTypes } from "types";

interface EmojiTooltipModalProps extends BottomSheetProps {
  onClickEmoji: (emojiType: EmojiTypes) => void;
}

export default function EmojiTooltipModal({
  open = false,
  onDismiss,
  onClickEmoji
}: EmojiTooltipModalProps) {
  return (
    <BottomSheet open={open} onDismiss={onDismiss}>
      <div className="flex items-center justify-center gap-3 mb-14">
        <Image
          src={IconHappy}
          className="w-14 h-14 cursor-pointer"
          onClick={() => onClickEmoji("happy")}
          alt="happy emoji"
        />
        <Image
          src={IconThinking}
          className="w-14 h-14 cursor-pointer"
          onClick={() => onClickEmoji("thinking")}
          alt="thinking emoji"
        />
        <Image
          src={IconSuprised}
          className="w-14 h-14 cursor-pointer"
          onClick={() => onClickEmoji("suprised")}
          alt="suprised emoji"
        />
        <Image
          src={IconSad}
          className="w-14 h-14 cursor-pointer"
          onClick={() => onClickEmoji("sad")}
          alt="sad emoji"
        />
        <Image
          src={IconAngry}
          className="w-14 h-14 cursor-pointer"
          onClick={() => onClickEmoji("angry")}
          alt="angry emoji"
        />
      </div>
    </BottomSheet>
  );
}
