'use client';

import { useTimer } from "@/hooks/useTimer";

const Home = () => {
  const { time, handleTogglePause } = useTimer();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-9xl font-bold" onClick={handleTogglePause}>{time}</div>
      <div>{time > 0 ? "_".repeat(time) : "Happy brewing! ☕️"}</div>
    </main>
  );
}

export default Home;
