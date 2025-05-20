'use client';

import { useTimer } from "@/hooks/useTimer";
import { useSetting } from "@/hooks/useSetting";

const Home = () => {
  const { time, handleTogglePause } = useTimer();
  const { pourCount, brewVolume, handlePourCountChange, handleBrewVolumeChange } = useSetting();

  return (
    <div className="flex flex-col min-h-screen justify-center gap-40">
      <main className="flex flex-col items-center gap-4">
        <div className="text-9xl font-bold" onClick={handleTogglePause}>{time}</div>
        <div>{time > 0 ? "_".repeat(time) : "Happy brewing! ☕️"}</div>
      </main>

      <div className="flex flex-col self-center w-50 gap-10">
        <button className="rounded-md bg-blue-500 text-white w-full self-center">4:6メソッド</button>

        <dl className="grid grid-cols-2 gap-y-4">
          <dt className="font-semibold">注湯回数</dt>
          <dd className="flex justify-end">
            <input className="text-right w-full" type="number" value={pourCount} min={3} max={10} onChange={handlePourCountChange} />
            <span>回</span>
          </dd>

          <dt className="font-semibold">抽出量</dt>
          <dd className="flex justify-end">
            <input className="text-right w-full" type="number" value={brewVolume} min={100} max={1000} step={50} onChange={handleBrewVolumeChange} />
            <span>ml</span>
          </dd>
        </dl>
      </div>
    </div>
  );
}

export default Home;
