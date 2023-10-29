import { eachDayOfInterval, endOfMonth } from "date-fns";
import { Days } from "./Days";

interface RenderCalendarProps {
  currentMonth: any;
  setSelectedDay: any;
  selectedDay: any;
  // filterMonthData: any;
}
function RenderCalendar({
  currentMonth,
  setSelectedDay,
  selectedDay
}: // filterMonthData
RenderCalendarProps) {
  const days = eachDayOfInterval({
    start: currentMonth,
    end: endOfMonth(currentMonth)
  });

  return (
    <Days
      // filterMonthData={filterMonthData}
      days={days}
      handleSelectedDay={setSelectedDay}
      selectedDay={selectedDay}
      currentMonth={currentMonth}
    />
  );
}

export { RenderCalendar };
