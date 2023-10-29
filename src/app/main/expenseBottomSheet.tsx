/* eslint-disable */

"use client";

import React, { useEffect } from "react";
import AngryEmotionIcon from "@/public/assets/images/emotion/angry";
import HappyEmotionIcon from "@/public/assets/images/emotion/happy";
import SadEmotionIcon from "@/public/assets/images/emotion/sad";
import SurprisedEmotionIcon from "@/public/assets/images/emotion/surprised";
import ThinkingEmotionIcon from "@/public/assets/images/emotion/thinking";
import PlusEmotionIcon from "@/public/assets/images/emotion/plus";

// interface SetExpenseGoalProps {
//   onClickSet: () => void;
// }

function MainExpenseBottomSheet() {
  return (
    <div className="w-full h-auto py-6 px-4 rounded-t-xl bg-white">
      <Header />
    </div>
  );
}
export default MainExpenseBottomSheet;

const Header = ({
  date = "",
  oneLineReview = "",
  onClickEmotion = () => {},
  onClickAddExpense = () => {}
}) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col gap-[3px]">
          <h2>{`오늘 목요일`}</h2>
          <p className="m-12-500 text-gray-600">{`오늘 너무 돈을 많이 쓴 것같은 기분이 든다...내일은오늘 너무 돈을 많이 쓴 것같은 기분이 든다...내일은`}</p>
        </div>

        <div className="flex justify-center items-center cursor-pointer ml-2">
          <AngryEmotionIcon width={36} height={36} />
        </div>
      </div>

      <button
        type="button"
        className="w-[87px] h-8 m-12-500 bg-gray-50 border border-black/[0.03] rounded-[30px]"
      >
        + 지출 추가
      </button>
    </div>
  );
};
