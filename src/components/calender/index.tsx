/* eslint-disable */
"use client";

// import { useState, useRef } from "react";
import { IconChecked } from "@/public/assets/images/icons";
import IconSearch from "@/public/assets/images/icons/search";

import { useState, useRef, useMemo } from "react";
// import { Header } from "./Header";
import { WeekHeader } from "./WeekHeader";
import { eachMonthOfInterval, format, parse, startOfToday, sub } from "date-fns";
// import { RenderCalendar } from "./RenderCalendar";
import { SlideItem } from "./slideItem";
import Swiper from "react-id-swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

interface calendarProps {
  onDateSelect: (date: string) => void;
  onDaySelect: any;
}

export default function CalendarContainer() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const currentMonth = useMemo(() => format(today, "MMM-yyyy"), [today]);
  const swiperRef = useRef<any>(null);
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const yearOfMonths = useMemo(() => {
    return eachMonthOfInterval({
      start: sub(firstDayCurrentMonth, { years: 1, months: -1 }),
      end: firstDayCurrentMonth
    });
  }, [firstDayCurrentMonth]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(
    yearOfMonths.indexOf(yearOfMonths[yearOfMonths.length - 1])
  );

  function previousMonth() {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  }

  function nextMonth() {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  }

  const params = {
    slidesPerView: 1,
    loop: false,
    centeredSlides: true,
    initialSlide: currentSlideIndex, // 현재 달부터 시작
    on: {
      realIndexChange: (swiper: any) => {
        setCurrentSlideIndex(swiper.realIndex);
      }
    }
  };

  return (
    <div className="App">
      <div className="calendar-container">
        {/* <Header
          currentMonth={yearOfMonths[currentSlideIndex]}
          prevMonth={previousMonth}
          nextMonth={nextMonth}
        /> */}

        <div className="flex justify-between items-center w-full">
          <h2>{`2023년 8월`}</h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="w-12 h-9 rounded-[30px] m-12-500 border border-black[0.04] bg-white"
            >{`한 달`}</button>
            <button type="button">
              <IconSearch width={22} height={22} />
            </button>
          </div>
        </div>

        <div className="body-container">
          <WeekHeader />
          {yearOfMonths && yearOfMonths.length > 0 && (
            // @ts-ignore
            <div className="overflow-hidden">
              <Swiper ref={swiperRef} {...params}>
                {yearOfMonths.map((month, idx) => {
                  return (
                    <div key={idx}>
                      <SlideItem
                        month={month}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                        // data={filterData}
                      />
                    </div>
                  );
                })}
              </Swiper>
            </div>
          )}
        </div>
      </div>
      {/* <h2 className="font-semibold text-gray-900">
        Schedule for{" "}
        <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
          {format(selectedDay, "MMM dd, yyy")}
        </time>
      </h2> */}
    </div>
  );
}
