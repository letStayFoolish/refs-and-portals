import React, { useRef, useState } from "react";

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
