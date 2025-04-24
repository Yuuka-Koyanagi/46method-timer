"use client";

import { useSettings } from "@/hooks/useSettings";

import { SettingsModal } from "@/components/SettingsModal";

const Timer = () => {
  const totalTime = null;
  const { showSettings, openSettings, ...settingsModalProps } = useSettings();

  return (
    <div className="min-h-screen flex flex-col">
      {showSettings && <SettingsModal {...settingsModalProps} />}

      <header className="fixed top-0 right-0 p-6">
        <button
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          onClick={openSettings}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </header>

      <div className="fixed top-0 left-0 p-6">
        <span className="text-gray-600 dark:text-gray-400 text-2xl">
          Total Time: <time dateTime="PT0S">{totalTime}</time>
        </span>
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="relative w-[512px] h-[512px] mb-16">
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
              className="text-[#9C8A7A] dark:text-gray-400"
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-gray-600 dark:text-white">
            00:00
          </div>
        </div>
      </main>
    </div>
  );
};

export default Timer;
