import "../styles/Scoreboard.css";

function Scoreboard({ score, highscore }) {
  return (
    <div className="score-container">
      <p className="score">Score: {score}</p>
      <p className="highscore">Highscore: {highscore}</p>
    </div>
  );
}

export default Scoreboard;
