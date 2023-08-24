import React, { useState } from "react";
import Calendar from "@/src/components/calender";
import RecordPage from "@/src/components/recordPage/RecordPage";

function Main() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date: any) => {
    setSelectedDate(date);
  };
  return (
    <div className="flex flex-col justify-between bg-gray-100">
      <Calendar onDateSelect={handleDateSelect} />
      <RecordPage selectedDate={selectedDate} />
    </div>
  );
}

export default Main;
