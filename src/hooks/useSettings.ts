import { useState } from "react";

const BREWING_METHODS = ["4:6メソッド", "ハイブリッドメソッド"];

export const useSettings = () => {
  const [brewingMethod, setBrewingMethod] = useState(BREWING_METHODS[0]);
  const toggleBrewingMethod = () => setBrewingMethod(prev => BREWING_METHODS[+(prev === BREWING_METHODS[0])]);

  const [amount, setAmount] = useState(300);
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.target.value));

  const [pourCount, setPourCount] = useState(5);
  const handlePourCountChange = (e: React.ChangeEvent<HTMLInputElement>) => setPourCount(Number(e.target.value));

  const [showSettings, setShowSettings] = useState(true);
  const openSettings = () => setShowSettings(true);
  const closeSettings = () => setShowSettings(false);

  return {
    settings: {
      brewingMethod,
      toggleBrewingMethod,
      amount,
      handleAmountChange,
      pourCount,
      handlePourCountChange,
    },
    showSettings,
    openSettings,
    closeSettings
  };
};
