"use client";

import React from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { isOpenState, activeTypeState } from "src/recoil/footerNavBar.atoms";

import ExpenseIcon from "@/public/assets/images/icons/bottomNavigationBar/expense";
import FeedIcon from "@/public/assets/images/icons/bottomNavigationBar/feed";
import AlarmIcon from "@/public/assets/images/icons/bottomNavigationBar/alarm";
import MyIcon from "@/public/assets/images/icons/bottomNavigationBar/my";

export default function BottomNavigationBar() {
  const [isOpen] = useRecoilState(isOpenState);
  const [activeType] = useRecoilState(activeTypeState);

  if (isOpen === false) {
    return <></>;
  }

  return (
    <div className="flex justify-evenly w-full h-[53px] border-t border-black/[0.03] shrink-0">
      <NavItem text="내 지출" linkPath="/main">
        <ExpenseIcon isActive={activeType === "main"} />
      </NavItem>

      <NavItem text="피드" linkPath="/feed">
        <FeedIcon isActive={activeType === "feed"} />
      </NavItem>

      <NavItem text="알림" linkPath="/alarm">
        <AlarmIcon isActive={activeType === "alarm"} />
      </NavItem>

      <NavItem text="마이" linkPath="/my">
        <MyIcon isActive={activeType === "my"} />
      </NavItem>
    </div>
  );
}

interface NavItemProps {
  text: string;
  linkPath: string;
  children?: React.ReactNode;
}
function NavItem({ text = "", linkPath = "/", children }: NavItemProps) {
  return (
    <Link href={linkPath} className="flex flex-col items-center gap-0.5 w-[53px] cursor-pointer">
      <div className="flex items-end h-[37px]">{children}</div>
      <span className="m-12-500">{text}</span>
    </Link>
  );
}
