import React, { useRef, useState } from "react";
import ResultModal from "./ResultModal.tsx";

type Props = {
  title: string;
  targetTime: number;
};

// let timerId;

const TimerChallenge: React.FC<Props> = ({ title, targetTime }) => {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const timerRef = useRef<number>();
  const dialogRef = useRef<HTMLDialogElement & { openMyModal: () => void }>(
    null,
  );

  if (timeRemaining <= 0) {
    clearInterval(timerRef.current);
    dialogRef?.current?.openMyModal();
  }

  const handleStart = () => {
    // setInterval will execute function every time timeOut's time expired, so not just once!
    timerRef.current = setInterval(() => {
      setTimeRemaining((prevState) => prevState - 10);
    }, 10);
  };

  const handleStopTimer = () => {
    dialogRef?.current?.openMyModal();
    clearInterval(timerRef.current);
  };

  const handleResetTimer = () => {
    setTimeRemaining(targetTime * 1000);
  };

  return (
    <>
      <ResultModal
        ref={dialogRef}
        onReset={handleResetTimer}
        remainingTime={timeRemaining}
        targetTime={targetTime}
      />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStopTimer : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
