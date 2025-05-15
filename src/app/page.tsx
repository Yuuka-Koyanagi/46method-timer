'use client';

import { useTimer } from "@/hooks/useTimer";

const Home = () => {
  const { time, handleTogglePause } = useTimer();

  return (
    <>
      <main className="min-h-screen flex flex-col justify-center items-center gap-6">
        <div className="text-9xl font-bold" onClick={handleTogglePause}>{time}</div>
        <div>{time > 0 ? "_".repeat(time) : "Happy brewing! ☕️"}</div>
      </main>

      <dl className="min-h-screen flex flex-col justify-center items-center text-2xl gap-6">
        <div className="flex gap-6">
          <dt>抽出メソッド</dt>
          <dd>4:6メソッド</dd>
        </div>

        <div className="flex gap-6">
          <dt>注湯回数</dt>
          <dd>5回</dd>
        </div>

        <div className="flex gap-6">
          <dt>抽出量</dt>
          <dd>300ml</dd>
        </div>
      </dl>
    </>
  );
}

export default Home;
