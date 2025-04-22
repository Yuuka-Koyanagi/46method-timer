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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md shadow-lg">
        <dl className="mb-4 space-y-2">
          <dt className="font-semibold">抽出メソッド</dt>
          <dd>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              onClick={toggleBrewingMethod}
            >
              {brewingMethod}
            </button>
          </dd>

          <dt className="font-semibold">抽出量</dt>
          <dd className="flex items-center gap-2">
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              step={50}
              min={50}
              max={1000}
              inputMode="numeric"
              className="border px-2 py-1 rounded w-full"
            />
            <span>ml</span>
          </dd>

          <dt className="font-semibold">投数</dt>
          <dd className="flex items-center gap-2">
            <input
              type="number"
              value={pourCount}
              onChange={handlePourCountChange}
              step={1}
              min={1}
              max={10}
              inputMode="numeric"
              className="border px-2 py-1 rounded w-full"
            />
            <span>投</span>
          </dd>
        </dl>

        <div className="flex justify-center">
          <button
            className="text-3xl hover:brightness-70 transition"
            onClick={closeSettings}
          >
            ✅
          </button>
        </div>
      </div>
    </div>
  );
};
