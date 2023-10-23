import { format } from "date-fns";

interface HeaderProps {
  currentMonth: any;
  prevMonth: any;
  nextMonth: any;
}
function Header({ currentMonth, prevMonth, nextMonth }: HeaderProps) {
  return (
    <div className="header">
      <button type="button" className="swiper-button swiper-button-prev1" onClick={prevMonth}>
        이전달
      </button>
      <div>
        {format(currentMonth, "M")}월/
        {format(currentMonth, "yyyy")}년
      </div>
      <button type="button" className="swiper-button swiper-button-next1" onClick={nextMonth}>
        다음달
      </button>
    </div>
  );
}

export { Header };
