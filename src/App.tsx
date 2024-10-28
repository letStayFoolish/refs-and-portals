import Player from "./components/Player.tsx";
import TimerChallenge from "./components/TimerChallenge.tsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting Tough" targetTime={10} />
        <TimerChallenge title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
