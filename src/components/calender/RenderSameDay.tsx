// import { parse, isSameDay } from "date-fns";
// import { memo, useMemo } from "react";

// interface RenderSameDayProps {
//     day: any,
//     data: any
// }
// const RenderSameDay = memo(({ day, data }: RenderSameDayProps) => {
//   const filteredData = useMemo(
//     () =>
//       data?.some((d: any) => isSameDay(parse(d.date, "yyyy/M/d", new Date()), day)),
//     [day, data]
//   );
//   return (
//     <></>
//     // <div className="w-1 h-1 mx-auto mt-1">
//     //   {filteredData && <div className="w-1 h-1 rounded-full bg-sky-500"></div>}
//     // </div>
//   );
// });

// export { RenderSameDay };
