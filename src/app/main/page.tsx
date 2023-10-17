"use client";

import React, { useState, useEffect } from "react";
import Calendar from "@/src/components/calender";
import RecordPage from "@/src/components/recordPage/RecordPage";
import { Pen } from "@/public/assets/images/icons";
import Logout from "@/src/components/logout";
import SignOut from "@/src/components/signout";
import MonthlyTarget from "@/src/components/monthlyTarget";
import useFooterNavBar from "@/src/hooks/useFooterNavBar";

function Main() {
  const { unmountClose } = useFooterNavBar({ open: true, type: "main" });

  useEffect(() => () => unmountClose(), []);

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
        <div className="flex flex-col items-end">
          <Logout />
          <SignOut />
          <Pen />
        </div>
        <div className="flex justify-start">
          <div className="sb-15-600 text-gray-700 ">닉네임 </div>
          <div className="m-15-500 text-gray-600 mx-[10px]">이번달 지출</div>
        </div>
        <MonthlyTarget target={20} spentCost={0} />
        <Calendar onDateSelect={handleDateSelect} onDaySelect={handleDaySelct} />
      </div>
      <RecordPage selectedDate={selectedDate} selectedDay={selectedDay} />
    </div>
  );
}

export default Main;
