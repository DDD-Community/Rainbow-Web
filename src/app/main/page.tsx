"use client";

import React, { useEffect } from "react";
// import { useQuery } from "@tanstack/react-query";
// import React, { useState, useEffect } from "react";
import CalendarContainer from "@/src/components/calender";
import { Pen } from "@/public/assets/images/icons";
// import Logout from "@/src/components/logout";
// import SignOut from "@/src/components/signout";
// import MonthlyTarget from "@/src/components/monthlyTarget";
import useFooterNavBar from "@/src/hooks/useFooterNavBar";
import ExpenseBottomSheet from "./expenseBottomSheet";
// import * as queryKeys from "@/src/queries/queryKeys";
// import { userInfoHandler } from "./mainHandler"

function Main() {
  const { unmountClose } = useFooterNavBar({ open: true, type: "main" });
  useEffect(() => () => unmountClose(), []);

  const handleSetExpenseGoal = () => {};

  return (
    <div className="flex flex-col bg-gray-100">
      <div className="flex flex-col py-3.5 px-4">
        <SetExpenseGoal onClickSet={handleSetExpenseGoal} />

        <ExpenseThisMonth nickName="닉닉" expensePrice={2000} />

        <MonthlyGoal goalPrice={200} currentExpensePrice={100} />

        <div className="mt-4">
          <CalendarContainer />
        </div>
      </div>

      <ExpenseBottomSheet />

      {/* <RecordPage selectedDate={selectedDate} selectedDay={selectedDay} /> */}
    </div>
  );
}
export default Main;

interface SetExpenseGoalProps {
  onClickSet: () => void;
}
function SetExpenseGoal({ onClickSet = () => {} }: SetExpenseGoalProps) {
  return (
    <div className="flex justify-end cursor-pointer">
      {/* <Logout /> */}
      {/* <SignOut /> */}
      <Pen onClick={onClickSet} />
    </div>
  );
}

interface ExpenseThisMonthProps {
  nickName: string;
  expensePrice: number;
}
function ExpenseThisMonth({ nickName = "", expensePrice = 0 }: ExpenseThisMonthProps) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="m-15-500 text-gray-600">
        <span className="sb-15-600 text-gray-700">{nickName}</span> 이번달 지출
      </p>

      <p className="flex items-center gap-0.5 m-30-500 text-gray-700">
        <span className="sb-35-600 text-gray-700">{expensePrice}</span>원
      </p>
    </div>
  );
}
interface MonthlyGoalProps {
  goalPrice: number;
  currentExpensePrice: number;
}
function MonthlyGoal({ goalPrice = 0, currentExpensePrice = 0 }: MonthlyGoalProps) {
  return (
    <div className="flex flex-col gap-[7px]">
      <p className="m-12-500 text-gray-600 text-right">
        목표 지출<span className="text-primary-default">{` ${goalPrice}만원`}</span>
      </p>
      <MonthlyGoalProgressBar goalPrice={goalPrice} currentExpensePrice={currentExpensePrice} />
    </div>
  );
}

function MonthlyGoalProgressBar({ goalPrice = 0, currentExpensePrice = 0 }: MonthlyGoalProps) {
  // 일부 값 / 전체 값 * 100
  const percentage = (currentExpensePrice / goalPrice) * 100;
  return (
    <div className="w-full h-[9px] rounded-lg border border-black/[0.03] overflow-hidden">
      <div
        className={`w-[${percentage}%] h-full rounded-lg bg-gradient-to-r from-[#FF5B29]/[0.28] to-[#FF5B29]/[1]`}
      />
    </div>
  );
}
