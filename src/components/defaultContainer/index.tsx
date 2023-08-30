import React from "react";
import BottomNavigationBar from "@/src/components/bottomNavigationBar";

interface DefaultContainerProps {
  isBottomNavBar?: boolean;
  children: React.ReactNode;
}

function DefaultContainer({ children, isBottomNavBar = true }: DefaultContainerProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col w-[375px] h-full shadow-md mx-auto">
        <div className="w-343 min-w-343 max-w-375 h-full my-0 mx-auto overflow-auto">
          {children}
        </div>

        {isBottomNavBar && <BottomNavigationBar />}
      </div>
    </div>
  );
}
export default DefaultContainer;
