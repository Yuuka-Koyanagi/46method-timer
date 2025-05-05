import { useState, useEffect } from "react";
import { useSettings } from "./useSettings";

export const useTimer = () => {
  const { settings } = useSettings();
  const { pourCount } = settings;

  // 現在の投数を追跡
  const [currentPour, setCurrentPour] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(45); // 初期値は45秒
  const [totalTime, setTotalTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  // 各投数に応じた時間を計算
  const calculateTimeForPour = (pourNumber: number) => {
    if (pourNumber <= 2) {
      return 45; // 1,2回目は45秒固定
    } else {
      const remainingPours = pourCount - 2; // 3投目以降の残り投数
      return Math.floor(120 / remainingPours); // 120秒を残り投数で割る
    }
  };

  // タイマーをリセットする関数
  const resetTimer = () => {
    setCurrentPour(1);
    setTime(calculateTimeForPour(1));
    setHasStarted(false);
    setIsRunning(false);
    setIsFinished(false);
    setTotalTime(0);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            setIsRunning(false);
            const nextPour = currentPour + 1;
            if (nextPour > pourCount) {
              setIsFinished(true);
              return 0;
            }
            const newPour = nextPour;
            setCurrentPour(newPour);
            setTime(calculateTimeForPour(newPour));
            return 0;
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
  }, [isRunning, currentPour, pourCount]);

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

  const formatTime = (seconds: number, isTotalTime: boolean = false) => {
    if (isTotalTime) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    return seconds.toString();
  };

  const toggleTimer = () => {
    console.log(hasStarted, isRunning);
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
    currentPour,
    resetTimer,
    pourCount,
    isFinished,
  };
}; 
