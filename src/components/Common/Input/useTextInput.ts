"use client";

import { ChangeEvent, ChangeEventHandler, useCallback, useState } from "react";

export type UseTextInputProps = {
  initValue?: string;
  onChange: ChangeEventHandler;
};

export const useTextInput = ({ initValue = "", onChange }: UseTextInputProps) => {
  const [value, setValue] = useState(initValue);

  const onChangeHandler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e);
      setValue(e.target.value);
    },
    [onChange]
  );

  return { value, onChangeHandler };
};
