import React from 'react';
import { useTimer } from '@/hooks/useTimer';

export const ResultModal: React.FC = () => {
  const { totalTime, formatTime, resetTimer } = useTimer();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-2xl py-12 px-9 w-[400px] h-[300px] shadow-xl transform transition-all duration-300 ease-in-out mx-6 my-24 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-8">
          抽出完了！
        </h2>
        <div className="text-2xl text-gray-600 dark:text-gray-400 mb-12">
          合計抽出時間: {formatTime(totalTime, true)}
        </div>
        <button
          onClick={resetTimer}
          className="px-6 py-3 bg-[#9C8A7A] text-white rounded-lg text-xl font-medium hover:bg-[#8B7A6A] transition-colors"
        >
          もう一度抽出する
        </button>
      </div>
    </div>
  );
}; 
