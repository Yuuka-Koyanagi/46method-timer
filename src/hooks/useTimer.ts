import { useEffect, useRef, useState } from "react";

const useTimer = () => {
  const [time, setTime] = useState(10);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const clearTimer = () => {
    if (!timerRef.current) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const countDown = (currentTime = time) => {
    if (currentTime <= 0) {
      setIsRunning(false);
      return;
    };

    timerRef.current = setTimeout(() => {
      const nextTime = currentTime - 1;
      setTime(nextTime);
      countDown(nextTime);
    }, 1000);
  };

  const handleTogglePause = () => setIsRunning(prev => !prev);

  useEffect(() => {
    if (isRunning && !timerRef.current) countDown();
    return () => clearTimer();
  }, [isRunning]);

  return { time, handleTogglePause };
};

export { useTimer };
