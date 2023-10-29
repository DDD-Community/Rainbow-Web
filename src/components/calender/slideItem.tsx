import { memo } from "react";
import { RenderCalendar } from "./RenderCalendar";

interface SlideItemProps {
  month: any;
  selectedDay: any;
  setSelectedDay: any;
}
const SlideItem = memo(({ month, selectedDay, setSelectedDay }: SlideItemProps) => (
    <div className="swiper-slide">
      <RenderCalendar
        currentMonth={month}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </div>
  ));

export { SlideItem };
