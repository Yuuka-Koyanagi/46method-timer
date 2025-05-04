import { useState, useEffect } from "react";
import { useSettings } from "./useSettings";

export const useTimer = () => {
  const { settings } = useSettings();
  const { pourCount } = settings;

  // 現在の投数を追跡
  const [currentPour, setCurrentPour] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(45); // 初期値は45秒
  const [totalTime, setTotalTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // 各投数に応じた時間を計算
  const calculateTimeForPour = (pourNumber: number) => {
    if (pourNumber <= 1) {
      return 45; // 0,1回目は45秒固定
    } else {
      const remainingPours = pourCount - 2; // 2投目以降の残り投数
      return Math.floor(120 / remainingPours); // 120秒を残り投数で割る
    }
  };

  // タイマーをリセットする関数
  const resetTimer = () => {
    setCurrentPour(0);
    setTime(calculateTimeForPour(0)); // 0投目の時間を計算
    setTotalTime(0);
    setHasStarted(false);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            setIsRunning(false);
            setCurrentPour(prev => prev + 1);
            setTotalTime(0);
            setHasStarted(false); // hasStartedもリセット
            return calculateTimeForPour(currentPour + 1);
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, currentPour]);

  useEffect(() => {
    let totalIntervalId: NodeJS.Timeout;

    if (hasStarted && isRunning) {
      totalIntervalId = setInterval(() => {
        setTotalTime((prevTotalTime) => prevTotalTime + 1);
      }, 1000);
    }

    return () => {
      if (totalIntervalId) {
        clearInterval(totalIntervalId);
      }
    };
  }, [hasStarted, isRunning]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => {
    if (!hasStarted) {
      resetTimer();
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
    currentPour,
    resetTimer,
    pourCount,
  };
}; 
