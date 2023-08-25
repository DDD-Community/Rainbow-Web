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
    <div className="flex flex-col justify-between bg-gray-100">
      <Calendar onDateSelect={handleDateSelect} onDaySelect={handleDaySelct} />
      <RecordPage selectedDate={selectedDate} selectedDay={selectedDay} />
    </div>
  );
}

export default Main;
