interface monthlyTargetProps {
  target: number;
  spentCost: number;
}

function MonthlyTarget({ target, spentCost }: monthlyTargetProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-start sb-35-600 text-gray-700">{spentCost} 원</div>
      <div className="flex flex-end">
        <div className="ml-[260px] m-12-500 text-gray-600">목표지출 </div>
        <div className="ml-[4px] m-12-500 text-primary-default">{target}만원</div>
      </div>
    </div>
  );
}

export default MonthlyTarget;
