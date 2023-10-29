import { addDays } from "date-fns";
import { WeekDays } from "./WeekDays";

interface RenderCalendarProps {
  currentWeek: any;
  setSelectedDay: any;
  selectedDay: any;
}
function WeekRenderCalendar({ currentWeek, setSelectedDay, selectedDay }: RenderCalendarProps) {
  const oneWeek = generateOneWeek(currentWeek);

  return (
    <WeekDays
      days={oneWeek}
      handleSelectedDay={setSelectedDay}
      selectedDay={selectedDay}
      currentMonth={currentWeek}
    />
  );
}
export { WeekRenderCalendar };

const generateOneWeek = (date: Date) => {
  const DATE_WEEK_LENGTH = 7;

  return Array.from({ length: DATE_WEEK_LENGTH }).map((_, index) => {
    const currentDay = addDays(date, index);
    return currentDay;
  });
};
