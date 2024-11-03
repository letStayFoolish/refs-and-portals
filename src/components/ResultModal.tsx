import { ForwardedRef, forwardRef } from "react";

type Props = {
  result: "won" | "lost";
  targetTime: number;
};

/**
 * Forwarding ref. The first argument is "props" and the second one is "ref".
 * */
const ResultModal = forwardRef(function ResultModal(
  { result, targetTime }: Props,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  return (
    <dialog ref={ref} className="result-modal">
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
});

export default ResultModal;
