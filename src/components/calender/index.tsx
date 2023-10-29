/* eslint-disable */
"use client";

import { useMemo, useRef, useState } from "react";
import cx from "classnames";
import {
  eachMonthOfInterval,
  eachWeekOfInterval,
  format,
  parse,
  startOfToday,
  startOfWeek,
  endOfWeek,
  lastDayOfMonth,
  sub
} from "date-fns";
import IconSearch from "@/public/assets/images/icons/search";
import { WeekHeader } from "./WeekHeader";
import Swiper from "react-id-swiper";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlideItem } from "./slideItem";
import { WeekSlideItem } from "./WeekSlideItem";
SwiperCore.use([Navigation]);

type CalendarTypes = "month" | "week";

interface CalendarContainerProps {
  onDaySelect?: any;
  onDateSelect?: (date: string) => void;
  onClickCalendarToggleButton?: () => void;
}

const today = startOfToday();
const currentMonth = format(today, "MMM-yyyy");
const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

const yearOfWeeks = eachWeekOfInterval(
  {
    start: sub(firstDayCurrentMonth, { years: 2, months: -1 }),
    end: lastDayOfMonth(today)
  },
  { weekStartsOn: 0 }
);

const compareDateYearMonth = (aDate: Date, bDate: Date) =>
  format(aDate, "yyyy-MM") === format(bDate, "yyyy-MM");
const createWeekHeaderDateText = (date: Date) =>
  `${format(date, "yyyy년 M월")} ${getWeek(date)}째주`;
const createMonthHeaderDateText = (date: Date) => format(date, "yyyy년 M월");

export default function CalendarContainer({
  onClickCalendarToggleButton = () => {}
}: CalendarContainerProps) {
  const monthSwiperRef = useRef<any>(null);
  const weekSwiperRef = useRef<any>(null);

  const [calendarHeaderDate, setCalendarHeaderDate] = useState<string>(format(today, "yyyy년 M월"));
  const [selectedDay, setSelectedDay] = useState(today);
  const [calendarType, setCalendarType] = useState<CalendarTypes>("month");

  const yearOfMonths = useMemo(() => {
    return eachMonthOfInterval({
      start: sub(firstDayCurrentMonth, { years: 2, months: -1 }),
      end: firstDayCurrentMonth
    });
  }, [firstDayCurrentMonth]);

  const handleToggleCalendarView = () => {
    const reversalCalendarType = (type: CalendarTypes) => (type === "month" ? "week" : "month");

    setCalendarType(prevType => reversalCalendarType(prevType));
    setHeaderDateText(reversalCalendarType(calendarType));
  };

  const setHeaderDateText = (type: CalendarTypes) => {
    if (type === "week") {
      const monthSwiperActiveIndex = monthSwiperRef.current.swiper.realIndex;
      const date = yearOfMonths[monthSwiperActiveIndex];

      const startOfWeekDay = startOfWeek(date, { weekStartsOn: 0 }); // 0 - sunday;

      const findIndex = yearOfWeeks.findIndex(
        day => format(day, "yyyy-MM-dd") === format(startOfWeekDay, "yyyy-MM-dd")
      );
      weekSwiperRef.current.swiper.slideTo(findIndex >= 0 ? findIndex : yearOfWeeks.length - 1);

      const headerDateText = createWeekHeaderDateText(
        compareDateYearMonth(date, startOfWeekDay) ? startOfWeekDay : date
      );
      setCalendarHeaderDate(headerDateText);
    } else {
      const weekSwiperActiveIndex = weekSwiperRef.current.swiper.realIndex;
      const date = yearOfWeeks[weekSwiperActiveIndex];

      const endOfWeekDate = endOfWeek(date);

      const headerDateText = createMonthHeaderDateText(
        compareDateYearMonth(date, endOfWeekDate) ? date : endOfWeekDate
      );
      setCalendarHeaderDate(headerDateText);
    }
  };

  const swiperCommonParams = {
    slidesPerView: 1,
    loop: false,
    centeredSlides: true
  };

  const monthSwiperParams = {
    ...swiperCommonParams,
    initialSlide: yearOfMonths.length - 1, // 마지막 달(현재 달)부터 시작
    on: {
      slideChange: (swiper: any) => {
        const swiperIndex = swiper.realIndex;
        const date = yearOfMonths[swiperIndex];
        const headerDateText = createMonthHeaderDateText(date);
        setCalendarHeaderDate(headerDateText);
      }
    }
  };

  const weekSwiperParams = {
    ...swiperCommonParams,
    on: {
      slideChange: (swiper: any) => {
        const swiperIndex = swiper.realIndex;
        const date = yearOfWeeks[swiperIndex];

        const headerDateText = createWeekHeaderDateText(date);
        setCalendarHeaderDate(headerDateText);
      }
    }
  };

  return (
    <div className="App">
      <div className="calendar-container">
        <div className="flex justify-between items-center w-full">
          <h2>{calendarHeaderDate}</h2>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="h-9 px-3 rounded-[30px] m-12-500 border border-black[0.04] bg-white"
              onClick={handleToggleCalendarView}
            >
              {calendarType === "month" ? "한 달" : "일주일"}
            </button>
            <button type="button">
              <IconSearch width={22} height={22} />
            </button>
          </div>
        </div>

        <div className="body-container">
          <WeekHeader />
          <div
            className={cx(
              "flex flex-col transition-[height] ease-in-out duration-150 overflow-hidden",
              calendarType === "month" ? "h-[340px]" : "h-[50px]"
            )}
          >
            <div className={calendarType === "month" ? "order-1" : "order-2"}>
              <Swiper ref={monthSwiperRef} {...monthSwiperParams}>
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

            <div className={calendarType === "week" ? "order-1" : "order-2"}>
              <Swiper ref={weekSwiperRef} {...weekSwiperParams}>
                {yearOfWeeks.map((week, idx) => {
                  return (
                    <div key={idx}>
                      <WeekSlideItem
                        week={week}
                        selectedDay={selectedDay}
                        setSelectedDay={setSelectedDay}
                      />
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const getWeek = (d: Date) => {
  const date = new Date(d);
  const currentDate = date.getDate();
  const firstDay = new Date(date.setDate(1)).getDay();

  return Math.ceil((currentDate + firstDay) / 7);
};
