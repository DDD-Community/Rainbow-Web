import React from "react";

interface DefaultContainerProps {
  children: React.ReactNode;
}

function DefaultContainer({ children }: DefaultContainerProps) {
  return (
    <div className="w-full h-full">
      <div className="w-343 min-w-343 max-w-375 h-full my-0 mx-auto">{children}</div>
    </div>
  );
}
export default DefaultContainer;
