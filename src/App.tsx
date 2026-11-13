
import "./App.css";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <main>
      <h1>Lab 9.2: State &amp; Events</h1>

      <CharacterCounter
        minWords={50}
        maxWords={500}
        targetReadingTime={3}
      />
    </main>
  );
}

export default App;
