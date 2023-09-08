import React from "react";

interface DefaultContainerProps {
  children: React.ReactNode;
}

function DefaultContainer({ children }: DefaultContainerProps) {
  return (
    <div className="shadow-md mx-auto">
      <div className="flex flex-col w-375 min-w-375 max-w-375 min-h-screen my-0 mx-auto overflow-auto [&>*:first-child]:h-[calc(100vh-53px)] [&>*:first-child]:overflow-auto">
        {children}
      </div>
    </div>
  );
}
export default DefaultContainer;
