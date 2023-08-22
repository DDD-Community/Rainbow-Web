import React from "react";

export default function PlusLayout({ children }: { children: React.ReactNode }) {
  return <main className="py-3.5 px-4">{children}</main>;
}
