import React, { useRef, useState } from "react";

/**
 * The key difference between state and refs, whenever the ref changes component function doesn't re-execute.
 * And for a state, when updating state (with set method), component will be re-executed!
 * */

const Player: React.FC = () => {
  const [enteredPlayerName, setEnteredPlayerName] = useState<string | null>(
    null,
  );

  const playerNameRef = useRef<HTMLInputElement>(null);

  function handleOnClick() {
    if (!playerNameRef || playerNameRef.current === null) return;

    setEnteredPlayerName(playerNameRef.current.value);
  }

  // Instead of writing it like this: enteredPlayerName ? enteredPlayerName : "some text"
  // We can do it in a short way: enteredPlayerName ?? "some text"
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input ref={playerNameRef} type="text" />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;
