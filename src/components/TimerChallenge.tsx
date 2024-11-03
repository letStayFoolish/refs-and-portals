import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal.tsx";

type Props = {
  title: string;
  targetTime: number;
};

// let timerId;

const TimerChallenge: React.FC<Props> = ({ title, targetTime }) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const timerRef = useRef<number>();
  const dialogRef = useRef<HTMLDialogElement & { openMyModal: () => void }>(
    null,
  );

  const handleStart = () => {
    timerRef.current = setTimeout(() => {
      setTimerExpired(true);
      dialogRef.current?.openMyModal();
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStopTimer = () => {
    clearTimeout(timerRef.current);
  };

  return (
    <>
      <ResultModal ref={dialogRef} result="lost" targetTime={targetTime} />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStopTimer : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
