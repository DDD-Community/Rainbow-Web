/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
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
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [selectedDay, setSelectedDay] = useState<number | null>(currentDate.getDate());

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
    setSelectedDay(dayNumber);
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
        <div className="flex m-14-500 text-gray-700">
          {currentYear}년 {currentMonth + 1}월
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
            const isToday =
              currentYear === currentDate.getFullYear() &&
              currentMonth === currentDate.getMonth() &&
              dayNumber === currentDate.getDate();
            return (
              <div
                key={`day-${index}`}
                className={`flex-center p-1 ${
                  dayNumber > 0 && dayNumber <= daysInMonth
                    ? `bg-gray-200 cursor-pointer rounded-lg ring-1 ring-gray-300 w-8 h-8 ${
                        dayNumber === selectedDay ? "bg-gray-700" : ""
                      }`
                    : ""
                }`}
              >
                {dayNumber > 0 && dayNumber <= daysInMonth && (
                  <>
                    {dayNumber === selectedDay ? (
                      <div
                        className="w-full h-full flex justify-center items-center mb-[5px]"
                        onClick={() => {
                          handleDateClick(dayNumber);
                        }}
                      >
                        <div className="flex-center sb-10-600 text-white">{dayNumber}</div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        className="w-full h-full"
                        onClick={() => {
                          handleDateClick(dayNumber);
                        }}
                      />
                    )}
                    <div className="flex-center sb-10-600 text-gray-800">
                      {isToday ? "오늘" : dayNumber}
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
