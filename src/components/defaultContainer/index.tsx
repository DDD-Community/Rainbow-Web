import React from "react";

interface DefaultContainerProps {
  children: React.ReactNode;
}

function DefaultContainer({ children }: DefaultContainerProps) {
  return (
    <div className=" w-[375px] shadow-md  mx-auto">
      <div className="w-343 min-w-343 max-w-375 min-h-screen my-0 mx-auto">{children}</div>
    </div>
  );
}
export default DefaultContainer;
