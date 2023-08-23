"use client";

import React from "react";

export interface ExpenditureDetailAreaProps {
  expenditureDetail: string;
}
export default function ExpenditureDetailArea({
  expenditureDetail = ""
}: ExpenditureDetailAreaProps) {
  return (
    <div className="flex justify-center mt-1.5">
      <span className="m-13-500 text-gray-500">{expenditureDetail}</span>
    </div>
  );
}
