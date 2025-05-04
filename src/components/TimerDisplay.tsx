import React, { useState, useEffect, useRef } from 'react';
import { useTimer } from '@/hooks/useTimer';

export const TimerDisplay: React.FC = () => {
  const { isRunning, time, totalTime, formatTime, toggleTimer, currentPour, pourCount } = useTimer();
  const [displayProgress, setDisplayProgress] = useState(0);
  const animationFrameRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(Date.now());
  const progressRef = useRef<number>(0);
  const lastProgressRef = useRef<number>(0);

  // 円の円周（2πr）
  const circumference = 251.2;

  useEffect(() => {
    // 初期時間から現在の残り時間までの進捗を計算
    const initialTime = time + totalTime;
    const targetProgress = time / initialTime; // 残り時間の割合を計算
    progressRef.current = targetProgress;
    lastProgressRef.current = targetProgress;
  }, [time, totalTime]);

  // タイマーが終了した時（currentPourが変更された時）にアニメーションをリセット
  useEffect(() => {
    // すべての進捗度をリセット
    setDisplayProgress(0);
    progressRef.current = 0;
    lastProgressRef.current = 0;

    // アニメーションフレームをキャンセル
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = undefined;
    }
  }, [currentPour]);

  useEffect(() => {
    if (isRunning) {
      const animate = () => {
        const now = Date.now();
        lastTimeRef.current = now;

        // 現在の進捗から目標の進捗まで滑らかに移動
        setDisplayProgress(prevProgress => {
          const diff = progressRef.current - prevProgress;
          const newProgress = prevProgress + diff * 0.05; // 補間係数を小さくしてより滑らかに
          return newProgress;
        });

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      // タイマーが停止している場合は、現在の進捗を維持
      setDisplayProgress(progressRef.current);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRunning]);

  // 時計回りのアニメーションのために、開始位置を12時の位置に設定
  const strokeDashoffset = circumference * displayProgress;

  return (
    <>
      <div className="fixed top-0 left-0 p-6">
        <span className="text-gray-600 dark:text-gray-400 text-2xl">
          合計抽出時間: <time dateTime={`PT${totalTime}S`}>{formatTime(totalTime, true)}</time>
        </span>
        <div className="mt-2">
          <span className="text-gray-600 dark:text-gray-400 text-2xl">
            {currentPour} / {pourCount} 投目
          </span>
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div
          className="relative w-[256px] h-[256px] mb-16 cursor-pointer"
          onClick={toggleTimer}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 dark:text-gray-200"
              strokeWidth="0"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
              transform="rotate(-90 50 50)"
            />
            {isRunning ? (
              <>
                <circle
                  className="text-[#9C8A7A] dark:text-gray-300"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  r="40"
                  cx="50"
                  cy="50"
                  transform="rotate(-90 50 50)"
                />
                <circle
                  className="text-white dark:text-[#0a0a0a]"
                  strokeWidth="8"
                  stroke="currentColor"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset - circumference}
                  r="40"
                  cx="50"
                  cy="50"
                  transform="rotate(-90 50 50)"
                />
              </>
            ) : (
              <circle
                className="text-[#9C8A7A] dark:text-gray-300"
                strokeWidth="8"
                stroke="currentColor"
                fill="transparent"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                r="40"
                cx="50"
                cy="50"
                transform="rotate(-90 50 50)"
              />
            )}
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-600 dark:text-white">
            {formatTime(time)}
          </div>
        </div>
      </main>
    </>
  );
}; 
