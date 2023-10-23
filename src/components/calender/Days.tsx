import { memo } from "react";
import { format, getDay, isEqual, isSameMonth, isToday } from "date-fns";
import cx from "classnames";

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7"
];
interface DaysProps {
  days: any;
  handleSelectedDay: any;
  selectedDay: any;
  currentMonth: any;
  // filterMonthData?: any;
}
const Days = memo(({ days, handleSelectedDay, selectedDay, currentMonth }: DaysProps) => {
  function handleClickDay(day: any) {
    console.log("click day", day);
    handleSelectedDay(day);
  }

  return (
    <div className="grid grid-cols-7 gap-y-2">
      {days?.map((day: any, dayIdx: any) => {
        const isSelected = isEqual(day, selectedDay);

        return (
          <div
            key={day.toString()}
            className={cx(
              "flex items-center justify-center w-full",
              dayIdx === 0 && colStartClasses[getDay(day)]
            )}
          >
            <button
              type="button"
              onClick={() => handleClickDay(day)}
              className={cx(
                "flex flex-col items-center gap-[3px]",
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) && isToday(day) && "text-red-500",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, currentMonth) &&
                  "text-gray-900",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, currentMonth) &&
                  "text-gray-400"
              )}
            >
              <div
                className={cx(
                  "flex items-center justify-center w-8 h-8 rounded-[8px] border border-black[0.03]",
                  isSelected ? "bg-gray-900" : "bg-gray-200"
                )}
              >
                <span className={cx("m-15-500", isSelected ? "text-white" : "text-gray-200")}>
                  {format(day, "d")}
                </span>
              </div>
              <time dateTime={format(day, "yyyy-MM-dd")} className="sb-10-600 text-gray-600">
                {isToday(day) ? "오늘" : format(day, "d")}
              </time>
            </button>
            {/* <RenderSameDay day={day} data={filterMonthData} /> */}
          </div>
        );
      })}
    </div>
  );
});

export { Days };
