import React from 'react';
import { useTimer } from '@/hooks/useTimer';

export const TimerDisplay: React.FC = () => {
  const { isRunning, time, totalTime, formatTime, toggleTimer } = useTimer();

  return (
    <>
      <div className="fixed top-0 left-0 p-6">
        <span className="text-gray-600 dark:text-gray-400 text-2xl">
          Total Time: <time dateTime={`PT${totalTime}S`}>{formatTime(totalTime)}</time>
        </span>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div
          className="relative w-[256px] h-[256px] mb-16 cursor-pointer"
          onClick={toggleTimer}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 dark:text-gray-200"
              strokeWidth="8"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
            <circle
              className={`${isRunning ? 'text-[#9C8A7A] dark:text-gray-400' : 'text-gray-400 dark:text-gray-600'}`}
              strokeWidth="8"
              strokeDasharray="251.2"
              strokeDashoffset="0"
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r="40"
              cx="50"
              cy="50"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-gray-600 dark:text-white">
            {formatTime(time)}
          </div>
        </div>
      </main>
    </>
  );
}; 
