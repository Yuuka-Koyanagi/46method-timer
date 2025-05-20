import { useState } from "react"

export const useSetting = () => {
  const [pourCount, setPourCount] = useState(5);
  const [brewVolume, setBrewVolume] = useState(300);

  const handlePourCountChange = (e: React.ChangeEvent<HTMLInputElement>) => setPourCount(Number(e.target.value));
  const handleBrewVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => setBrewVolume(Number(e.target.value));

  return { pourCount, brewVolume, handlePourCountChange, handleBrewVolumeChange };
};
