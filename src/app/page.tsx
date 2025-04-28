"use client";

import { useSettings } from "@/hooks/useSettings";
import { SettingsModal } from "@/components/SettingsModal";
import { TimerDisplay } from "@/components/TimerDisplay";
import { SettingsButton } from "@/components/SettingsButton";

const Home = () => {
  const { showSettings, openSettings, ...settingsModalProps } = useSettings();

  return (
    <div className="min-h-screen flex flex-col">
      {showSettings && <SettingsModal {...settingsModalProps} />}

      <header className="fixed top-0 right-0 p-6">
        <SettingsButton onClick={openSettings} />
      </header>

      <TimerDisplay />
    </div>
  );
};

export default Home;
