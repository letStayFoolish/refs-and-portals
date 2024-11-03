import { ForwardedRef, forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
  result: "won" | "lost";
  targetTime: number;
};

/**
 * Forwarding ref - The first argument is "props" and the second one is "ref".
 * */
const ResultModal = forwardRef(function ResultModal(
  props: Props,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  const { result, targetTime } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      openMyModal() {
        dialogRef?.current?.showModal();
      },
    };
  }, []);

  return (
    <dialog ref={dialogRef} className="result-modal">
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
