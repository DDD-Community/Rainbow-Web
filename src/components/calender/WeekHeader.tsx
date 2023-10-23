const WEEKS = ["일", "월", "화", "수", "목", "금", "토"]; // ko 오류로 인하여 백업

function WeekHeader() {
  return (
    <div className="grid grid-cols-7 w-full">
      {WEEKS.map((week, i) => (
        <div key={i} className="flex justify-center items-center h-8">
          <span className="m-12-500 text-gray-600">{week}</span>
        </div>
      ))}
    </div>
  );
}

export { WeekHeader };
