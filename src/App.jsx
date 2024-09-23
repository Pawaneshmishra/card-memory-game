import { useEffect, useState } from "react";
import Header from './Header';
import Scoreboard from './Scoreboard';
import CardGrid from './CardGrid';
import usePokeAPI from './usePokeAPI';
import './index.css'

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const { pokemon, loading, error } = usePokeAPI(12);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  }, [score, bestScore]);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    }

    else {
      setScore(score + 1);
      setClickedCards([...clickedCards, id]);
    }
  }

  if (loading) return <div>Loading.....</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="app">
      <Header />
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid pokemon={pokemon} onCardClick={handleCardClick} />
    </div>
  );
}

export default App
