import { useEffect, useState } from "react";
import Card from "./Card";
import "../styles/CardContainer.css";

function CardContainer({ onGameOver, onIncreaseScore }) {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    let ignore = false;
    const generateRandomNumber = () => {
      return Math.floor(Math.random() * 1024 + 1);
    };

    const generateCards = async () => {
      let pokemonList = [];
      for (let i = 0; pokemonList.length < 12; i++) {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${generateRandomNumber()}`
          );
          const pokemon = await response.json();
          if (!pokemonList.some((ele) => ele.id === pokemon.id)) {
            pokemonList.push(pokemon);
          }
        } catch (error) {
          console.error(error.message);
        }
      }
      setCards(pokemonList);
    };
    if (!ignore) generateCards();

    return () => {
      ignore = true;
    };
  }, []);

  const playCards = cards;

  const reshuffle = () => {
    for (let i = playCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playCards[i], playCards[j]] = [playCards[j], playCards[i]];
    }
  };

  const clickHandler = (name) => {
    if (clickedCards.includes(name)) {
      onGameOver();
      return;
    }

    onIncreaseScore();
    reshuffle();
    setClickedCards([...clickedCards, name]);
  };

  return (
    <div className="card-container">
      {playCards.map((card) => (
        <Card
          key={card.name}
          onClick={clickHandler}
          name={card.name}
          src={card.sprites.front_default}
        />
      ))}
    </div>
  );
}

export default CardContainer;
