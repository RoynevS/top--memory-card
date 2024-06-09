import Scoreboard from "./Scoreboard";
import "../styles/Header.css";

function Header({ score, highscore }) {
  return (
    <header>
      <h1 className="primary-heading">Memory Card Game</h1>
      <p className="description">Select a card, but never the same twice.</p>
      <Scoreboard score={score} highscore={highscore} />
    </header>
  );
}

export default Header;
