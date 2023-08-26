import React, { useState } from "react";
import Calendar from "@/src/components/calender";
import RecordPage from "@/src/components/recordPage/RecordPage";

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
      <div className="w-343 flex flex-col  ">
        <Calendar onDateSelect={handleDateSelect} onDaySelect={handleDaySelct} />
      </div>
      <RecordPage selectedDate={selectedDate} selectedDay={selectedDay} />
    </div>
  );
}

export default Main;
