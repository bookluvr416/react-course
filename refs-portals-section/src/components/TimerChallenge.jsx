import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerRef = useRef();
  const dialogRef = useRef();

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  // scenario where user lost
  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  };

  const handleReset = () => {
    setTimeRemaining(targetTime * 1000);
  };

  // start button click
  const handleStart = () => {
    const timerInterval = 10;
    timerRef.current = setInterval(() => {
      setTimeRemaining(prevState => prevState - timerInterval);
    }, timerInterval);
  };

  // stop button click
  const handleStop = () => {
    clearInterval(timerRef.current);
    dialogRef.current.open();
  };

  return (
    <>
      <ResultModal
        ref={dialogRef}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          {!timerIsActive && <button onClick={handleStart}>Start Challenge</button>}
          {timerIsActive && <button onClick={handleStop}>Stop Challenge</button>}
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}