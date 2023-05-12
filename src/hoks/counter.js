import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  function inc() {
    setCount((prev) => prev + 1);
  }

  function dec() {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }
  return {
    count,
    inc,
    dec,
  };
};
