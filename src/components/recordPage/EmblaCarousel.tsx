/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import React, { useState } from "react";
import EmojiBottomSheet from "../emojiBottomSheet";
// import UserFeedList from "./UserFeedList";

type PropType = {
  options?: EmblaOptionsType;
};

function EmblaCarousel(props: PropType) {
  const { options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  const [isEmojiBottomSheet, setIsEmojiBottomSheet] = useState(false);

  const openEmojiBottomSheet = () => setIsEmojiBottomSheet(true);
  const closeEmojiBottomSheet = () => setIsEmojiBottomSheet(false);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container flex flex-col">
          {/* <UserFeedList openEmojiBottomSheet={openEmojiBottomSheet} /> */}
        </div>
        <EmojiBottomSheet
          open={isEmojiBottomSheet}
          onDismiss={closeEmojiBottomSheet}
          onClickEmoji={openEmojiBottomSheet}
        />
      </div>
    </div>
  );
}

export default EmblaCarousel;
