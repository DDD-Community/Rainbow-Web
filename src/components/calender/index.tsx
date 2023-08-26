/* eslint-disable jsx-a11y/control-has-associated-label */

"use client";

import { useState, useRef } from "react";

const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];
interface calendarProps {
  onDateSelect: (date: string) => void;
  onDaySelect: any;
}

function Calendar({ onDateSelect, onDaySelect }: calendarProps) {
  const currentDate = new Date();

  const koreaDateTime = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul"
  }).format(currentDate);

  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());

  const calendarRef = useRef(null);
  const startXRef = useRef(null);

  const handleMouseDown = (event: any) => {
    startXRef.current = event.clientX;
  };

  const handleMouseUp = (event: any) => {
    if (startXRef.current === null) {
      return;
    }
    const endX = event.clientX;
    const diffX = endX - startXRef.current;

    if (diffX > 50) {
      handlePrevMonth();
    } else if (diffX < -50) {
      handleNextMonth();
    }

    startXRef.current = null;
  };

  const handleTouchStart = (event: any) => {
    startXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: any) => {
    if (startXRef.current === null) {
      return;
    }
    const endX = event.changedTouches[0].clientX;
    const diffX = endX - startXRef.current;

    if (diffX > 50) {
      handlePrevMonth();
    } else if (diffX < -50) {
      handleNextMonth();
    }
  };

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
    const clickedDate = new Date(currentYear, currentMonth, dayNumber);
    const formattedDate = `${clickedDate.getFullYear()}-${(clickedDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${clickedDate.getDate().toString().padStart(2, "0")}`;

    const dayOfWeek = daysOfWeek[clickedDate.getDay()];
    onDateSelect(formattedDate);
    onDaySelect(dayOfWeek);
    console.log(`Clicked on ${currentYear}-${currentMonth + 1}-${dayNumber}`);
  };
  return (
    <div>
      <button
        type="button"
        className="container mx-auto mt-5"
        ref={calendarRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="text-center">
          <h1 className="text-3xl font-semibold mb-2">
            {currentYear}년 {currentMonth + 1}월
          </h1>
          <p>한국 시간: {koreaDateTime}</p>
        </div>
        <div className="mt-5 grid grid-cols-7 gap-4 m-12-500">
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
              <div
                key={`day-${index}`}
                className={`flex-center p-1 ${
                  dayNumber > 0 && dayNumber <= daysInMonth
                    ? "bg-gray-200 cursor-pointer rounded-lg ring-1 ring-gray-300 w-8 h-8"
                    : ""
                }`}
              >
                {dayNumber > 0 && dayNumber <= daysInMonth && (
                  <>
                    <button
                      type="button"
                      className="w-full h-full"
                      onClick={() => {
                        handleDateClick(dayNumber);
                      }}
                    />
                    <div className="flex-center sb-10-600 text-gray-800">
                      {dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : ""}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </button>
    </div>
  );
}

export default Calendar;
