import { useState, useEffect } from "react";
import { TTimerProps } from "../pages/student/types";

const Timer = ({ initialTime, onTimeout, updateTimeLeft }: TTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : prevTime));
      updateTimeLeft(timeLeft);
    }, 1000);

    return () => {
      clearInterval(interval);
      if (timeLeft === 0 && onTimeout) {
        onTimeout();
      }
    };
  }, [timeLeft, onTimeout, updateTimeLeft]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return <div>{formatTime(timeLeft)}</div>;
};

export default Timer;
