import "../styles/Card.css";

function Card({ onClick, src, name }) {
  const formatName = (pokemonName) => {
    return pokemonName
      .replaceAll("-", " ")
      .split("")
      .map((char, index) => {
        if (index === 0) {
          return char.toUpperCase();
        }
        return char.toLowerCase();
      });
  };

  return (
    <div className="card" onClick={() => onClick(name)}>
      <img className="card-img" src={src} />
      <p className="card-text">{formatName(name)}</p>
    </div>
  );
}

export default Card;
