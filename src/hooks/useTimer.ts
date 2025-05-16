import { useEffect, useRef, useState } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(10);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const clearTimer = () => {
    if (!timerRef.current) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;
  };

  const performCountStep = async (nextTime: number) => {
    setTime(nextTime);
    await new Promise(resolve => timerRef.current = setTimeout(resolve, 1000));
  };

  const startTimer = async (startTime = time) => {
    for (let i = startTime; i >= 0; i--) await performCountStep(i);
    setIsRunning(false);
  };

  const handleTogglePause = () => setIsRunning(prev => !prev);

  useEffect(() => {
    if (isRunning && !timerRef.current && time > 0) startTimer();
    return () => clearTimer();
  }, [isRunning]);

  return { time, handleTogglePause };
};
