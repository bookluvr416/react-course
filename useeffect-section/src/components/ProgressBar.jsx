import { useState, useEffect } from "react";

const ProgressBar = ({ TIMER_CONST }) => {
  const [remainingTime, setRemainingTime] = useState(TIMER_CONST);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval');
      setRemainingTime(prevTime => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    }
  }, [])

  return <progress value={remainingTime} max={TIMER_CONST} />
}

export default ProgressBar;
