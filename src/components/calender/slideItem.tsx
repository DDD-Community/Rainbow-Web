import { memo, useMemo } from "react";
import { isSameMonth, parse } from "date-fns";
import { RenderCalendar } from "./RenderCalendar";
import { data } from "./data";

interface SlideItemProps {
  month: any;
  selectedDay: any;
  setSelectedDay: any;
}
const SlideItem = memo(({ month, selectedDay, setSelectedDay }: SlideItemProps) => {
  const filterMonthData = useMemo(
    () => data.filter((d: any) => isSameMonth(parse(d.date, "yyyy/M/d", new Date()), month)),
    [month]
  );

  return (
    <div className="swiper-slide">
      <RenderCalendar
        currentMonth={month}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        filterMonthData={filterMonthData}
      />
    </div>
  );
});

export { SlideItem };
