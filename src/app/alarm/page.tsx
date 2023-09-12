"use client";

import React, { useEffect, useState } from "react";
import useFooterNavBar from "@/src/hooks/useFooterNavBar";
import NoResult from "@/src/components/noResult";
import { PersonProfile } from "@/src/components/personProfile";
import { EmojiProfile } from "@/src/components/emojiProfile";

export default function AlarmPage() {
  useFooterNavBar({ open: true, type: "alarm" });

  const [alarmList, setAlarmList] = useState<any>([]);

  useEffect(() => {
    setAlarmList(["a"]);
  }, []);

  return (
    <main className="flex flex-col">
      <h1 className="p-4 border-b border-black[0.06]">알림</h1>

      {alarmList.length ? (
        <section className="flex flex-col gap-2 py-3.5 px-4 pb-5">
          <AlarmCard
            profile={<PersonProfile />}
            content="Nickname님의 새로운 지출이 등록되었어요"
            timeStamp="1분 전"
          />
          <AlarmCard
            profile={<EmojiProfile />}
            content="Nickname님의 새로운 지출이 등록되었어요"
            timeStamp="1분 전"
          />
          <AlarmCard
            profile={<EmojiProfile type="blue" />}
            content="Nickname님의 새로운 지출이 등록되었어요"
            timeStamp="1분 전"
          />
          <AlarmCard
            profile={<EmojiProfile type="green" />}
            content="Nickname님의 새로운 지출이 등록되었어요"
            timeStamp="1분 전"
          />
          <AlarmCard
            profile={<EmojiProfile type="purple" />}
            content="Nickname님의 새로운 지출이 등록되었어요"
            timeStamp="1분 전"
          />
        </section>
      ) : (
        <NoResultArea />
      )}
    </main>
  );
}

function NoResultArea() {
  return (
    <div className="pt-[44px]">
      <NoResult descriptions={["알림 내역이 아직 없어요", "친구들의 활동을 기다려주세요"]} />
    </div>
  );
}

interface AlarmCardProps {
  profile: React.ReactNode;
  content: string;
  timeStamp?: string;
  onClick?: () => void;
}
function AlarmCard({
  profile,
  content = "",
  timeStamp = "방금",
  onClick = () => {}
}: AlarmCardProps) {
  return (
    <article className="flex items-center justify-between px-4 py-2.5 border border-black[0.03] bg-gray-50 rounded-[10px]">
      <div className="flex items-center gap-2.5 mr-2">
        {profile}

        <div className="flex flex-col">
          <p className="sb-13-600">{content}</p>
          <span className="m-11-500 text-gray-500">{timeStamp}</span>
        </div>
      </div>

      <button
        type="button"
        className="shrink-0 w-[66px] h-8 m-12-500 border border-black[0.04] bg-white rounded-[30px]"
        onClick={onClick}
      >
        보러가기
      </button>
    </article>
  );
}
