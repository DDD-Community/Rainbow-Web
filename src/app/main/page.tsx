import React, { useState } from "react";
import Calendar from "@/src/components/calender";
import RecordPage from "@/src/components/recordPage/RecordPage";
import { Pen } from "@/public/assets/images/icons";

function Main() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
  };
  const handleDaySelct = (day: any) => {
    setSelectedDay(day);
  };
  return (
    <div className="flex flex-col justify-between items-center bg-gray-100">
      <div className="flex flex-col w-343 my-[10px]">
        <div className="flex justify-end">
          <Pen />
        </div>
        <div className="flex justify-start">
          <div className="sb-15-600 text-gray-700 ">닉네임 </div>
          <div className="m-15-500 text-gray-600 mx-[10px]">이번달 지출</div>
        </div>

        <Calendar onDateSelect={handleDateSelect} onDaySelect={handleDaySelct} />
      </div>
      <RecordPage selectedDate={selectedDate} selectedDay={selectedDay} />
    </div>
  );
}

export default Main;
