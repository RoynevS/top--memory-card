import { useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  const [roundCounter, setRoundCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  const gameOverHandler = () => {
    setRoundCounter(roundCounter + 1);
    setScore(0);
    score > highscore && setHighscore(score);
  };

  const increaseScoreHandler = () => {
    setScore(score + 1);
  };

  return (
    <>
      <Header score={score} highscore={highscore} />
      <CardContainer
        key={roundCounter}
        onGameOver={gameOverHandler}
        onIncreaseScore={increaseScoreHandler}
      />
    </>
  );
}

export default App;
