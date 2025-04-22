"use client";

import { useSettings } from "@/hooks/useSettings";

import { SettingsModal } from "@/components/SettingsModal";

const Timer = () => {
  const totalTime = null;
  const { showSettings, openSettings, ...settingsModalProps } = useSettings();

  return (
    <>
      {showSettings && <SettingsModal {...settingsModalProps} />}

      <div className="flex justify-end">
        <button
          className="text-3xl hover:brightness-70 transition"
          onClick={openSettings}
        >
          ⚙️
        </button>
      </div>

      <div className="flex justify-end">
        <span>
          Total Time: <time dateTime="PT0S">{totalTime}</time>
        </span>
      </div>
    </>
  );
};

export default Timer;
