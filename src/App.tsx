
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <main>
      <h1>Lab 9.2: Props and State</h1>

      <CharacterCounter
        minWords={50}
        maxWords={500}
        targetReadingTime={3}
      />
    </main>
  );
}

export default App;
