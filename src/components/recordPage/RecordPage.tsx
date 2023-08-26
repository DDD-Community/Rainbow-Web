import React from "react";
import { RoundedButton } from "../Common/Button/Rounded/Sub/RoundedButton";

type RecordPageProps = {
  selectedDate: any;
  selectedDay: any;
};

function RecordPage({ selectedDate, selectedDay }: RecordPageProps) {
  return (
    <div className="bg-white rounded-t-[10px] flex flex-col justify-center mt-10 p-2 w-full">
      <div className="w-full flex justify-between p-2">
        <div className="flex flex-col">
          {selectedDay && <div className="sb-14-600 text-gray-700 ">오늘 {selectedDay}요일</div>}
          {selectedDate && <div className="m-12-500 text-gray-500">{selectedDate}</div>}
          <div className="m-12-500 text-gray-500">지출 한줄평을 작성해보세요</div>
        </div>
        <button type="button">플러스</button>
      </div>
      <RoundedButton color="default" size="large" className="mt-3">
        + 지출추가
      </RoundedButton>
    </div>
  );
}
export default RecordPage;
