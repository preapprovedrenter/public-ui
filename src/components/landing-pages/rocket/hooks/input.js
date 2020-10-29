import { useState } from "react";

export const useInput = (initialValue, onChangeCallback) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
        if (onChangeCallback) {
          onChangeCallback(event.target.value);
        }
      }
    }
  };
};