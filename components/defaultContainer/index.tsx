import React from "react";

interface DefaultContainerProps {
  children: React.ReactNode;
}

function DefaultContainer({ children }: DefaultContainerProps) {
  return (
    <div className="w-full h-full">
      <div className="w-320 min-w-320 max-w-375 min-h-screen my-0 mx-auto">{children}</div>
    </div>
  );
}
export default DefaultContainer;
