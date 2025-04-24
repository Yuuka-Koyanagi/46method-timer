type SettingsState = {
  brewingMethod: string;
  toggleBrewingMethod: () => void;
  amount: number;
  handleAmountChange: React.ChangeEventHandler<HTMLInputElement>;
  pourCount: number;
  handlePourCountChange: React.ChangeEventHandler<HTMLInputElement>;
};

type SettingsModalProps = {
  settings: SettingsState;
  closeSettings: () => void;
};

export const SettingsModal = ({ settings, closeSettings }: SettingsModalProps) => {
  const {
    brewingMethod,
    toggleBrewingMethod,
    amount,
    handleAmountChange,
    pourCount,
    handlePourCountChange,
  } = settings;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeSettings();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl py-12 px-9 w-[400px] h-[400px] shadow-xl transform transition-all duration-300 ease-in-out mx-6 my-24 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-48 w-full max-w-[300px] mx-auto">
          <div className="space-y-9 mb-48">
            <label className="block text-2xl font-medium text-gray-700 dark:text-gray-300">抽出メソッド</label>
            <div className="flex items-center gap-6">
              <button
                onClick={() => toggleBrewingMethod()}
                className="min-w-[300px] px-9 py-6 rounded-lg text-2xl font-medium transition-colors border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {brewingMethod}
              </button>
            </div>
          </div>

          <div className="space-y-9 mb-48">
            <label className="block text-2xl font-medium text-gray-700 dark:text-gray-300">抽出量</label>
            <div className="flex items-center gap-6">
              <input
                type="number"
                value={amount}
                onChange={handleAmountChange}
                step={50}
                min={50}
                max={1000}
                inputMode="numeric"
                className="w-1/3 border border-gray-300 dark:border-gray-600 px-9 py-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-2xl"
              />
              <span className="text-gray-600 dark:text-gray-400 text-2xl">ml</span>
            </div>
          </div>

          <div className="space-y-9">
            <label className="block text-2xl font-medium text-gray-700 dark:text-gray-300">投数</label>
            <div className="flex items-center gap-6">
              <input
                type="number"
                value={pourCount}
                onChange={handlePourCountChange}
                step={1}
                min={1}
                max={10}
                inputMode="numeric"
                className="w-1/3 border border-gray-300 dark:border-gray-600 px-9 py-6 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white text-2xl"
              />
              <span className="text-gray-600 dark:text-gray-400 text-2xl">投</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-18">
          <button
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            onClick={closeSettings}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
