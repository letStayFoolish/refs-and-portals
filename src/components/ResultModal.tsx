import React from "react";

type Props = {
  result: "won" | "lost";
  targetTime: number;
};

const ResultModal: React.FC<Props> = ({ result, targetTime }) => {
  return (
    <dialog className="result-modal" open>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
