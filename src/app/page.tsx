'use client';

import { useTimer } from "@/hooks/useTimer";

const Home = () => {
  const { time, handleTogglePause } = useTimer();

  return (
    <>
      <div>{time}</div>
      <button onClick={handleTogglePause}>Start</button>
    </>
  );
}

export default Home;
