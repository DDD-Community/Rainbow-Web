"use client";

import React, { useRef } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";

export interface BottomSheetProps {
  children?: React.ReactNode;
  open: boolean;
  onDismiss: () => void;
  header?: React.ReactNode;
}

export default function BottomSheetComponent({
  children,
  open = false,
  onDismiss,
  header
}: BottomSheetProps) {
  const sheetRef = useRef<BottomSheetRef>(null);

  return (
    <BottomSheet open={open} ref={sheetRef} onDismiss={onDismiss} header={header}>
      {children}
    </BottomSheet>
  );
}
