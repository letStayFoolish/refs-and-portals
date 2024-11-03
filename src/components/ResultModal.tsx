import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  targetTime: number;
  remainingTime: number;
  onReset: () => void;
};

/**
 * Forwarding ref - The first argument is "props" and the second one is "ref".
 * */
const ResultModal = forwardRef(function ResultModal(
  props: Props,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  const { remainingTime, targetTime, onReset } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  useImperativeHandle(ref, () => {
    return {
      openMyModal() {
        dialogRef?.current?.showModal();
      },
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="result-modal">
      {userLost && <h2>You lost!</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconds left.</strong>
      </p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
