"use client";

import { useState } from "react";
import "@/app/globals.css";

const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

function Calendar() {
  const currentDate = new Date();
  const koreaDateTime = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul"
  }).format(currentDate);

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handleDateClick = (dayNumber: any) => {
    console.log(`Clicked on ${currentYear}-${currentMonth + 1}-${dayNumber}`);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-2">
          {currentYear}년 {currentMonth + 1}월
        </h1>
        <p>한국 시간: {koreaDateTime}</p>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handlePrevMonth}
        >
          이전달
        </button>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          onClick={handleNextMonth}
        >
          다음달
        </button>
      </div>
      <div className="mt-5 grid grid-cols-7 gap-2">
        {daysOfWeek.map(day => (
          <div key={day} className="text-center p-2">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }, (_, index) => (
          <div key={`empty-${index}`} className="p-2" />
        ))}
        {Array.from({ length: daysInMonth }, (_, index) => {
          const dayNumber = index + 1;
          return (
            <button
              type="button"
              key={`day-${index}`}
              className={`text-center p-2 ${
                dayNumber > 0 && dayNumber <= daysInMonth
                  ? "bg-gray-200 cursor-pointer rounded-md w-8 h-8"
                  : ""
              }`}
              onClick={() => {
                if (dayNumber > 0 && dayNumber <= daysInMonth) {
                  handleDateClick(dayNumber);
                }
              }}
            >
              {dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : ""}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
