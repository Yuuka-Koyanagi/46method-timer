'use client';

import { useTimer } from "@/hooks/useTimer";

const Home = () => {
  const { time, handleTogglePause } = useTimer();

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="text-9xl font-bold" onClick={handleTogglePause}>{time}</div>
    </main>
  );
}

export default Home;
