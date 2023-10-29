import { memo } from "react";
import { WeekRenderCalendar } from "./WeekRenderCalendar";

interface SlideItemProps {
  week: any;
  selectedDay: any;
  setSelectedDay: any;
}
const WeekSlideItem = memo(({ week, selectedDay, setSelectedDay }: SlideItemProps) => (
    <div className="swiper-slide">
      <WeekRenderCalendar
        currentWeek={week}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
    </div>
  ));

export { WeekSlideItem };
