import { useState, useEffect } from "react";

export const useTimer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    let totalIntervalId: NodeJS.Timeout;

    if (hasStarted) {
      totalIntervalId = setInterval(() => {
        setTotalTime((prevTotalTime) => prevTotalTime + 1);
      }, 1000);
    }

    return () => {
      if (totalIntervalId) {
        clearInterval(totalIntervalId);
      }
    };
  }, [hasStarted]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    setIsRunning(!isRunning);
  };

  return {
    isRunning,
    time,
    totalTime,
    formatTime,
    toggleTimer,
  };
}; 
