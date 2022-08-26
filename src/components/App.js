import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import NewCardForm from "./NewCardForm";
import CardCollection from "./CardCollection";
import PlayGame from "./PlayGame";

function App() {
  const [gameCards, setGameCards] = useState([]);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    health: 0,
    attack: 0,
  });

  useEffect(() => {
    fetch("http://localhost:9292/cards")
      .then((res) => res.json())
      .then((gameCards) => setGameCards(gameCards));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/player-hand")
      .then((res) => res.json())
      .then((playerDeck) => setPlayerDeck(playerDeck));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/opponent-hand")
      .then((res) => res.json())
      .then((opponentDeck) => setOpponentDeck(opponentDeck));
  }, []);

  function spreadPost(newCardPost) {
    setGameCards((gameCards) => {
      return [...gameCards, newCardPost];
    });
  }
  function handleDeleteCard(cardToDelete) {
    const updatedCards = gameCards.filter(
      (card) => card.id !== cardToDelete.id
    );
    setGameCards(updatedCards);
  }

  function handleupdateCard(updatedCard) {
    const updatedCards = gameCards.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );
    setGameCards(updatedCards);
  }

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/play-game"
          element={<PlayGame playerDeck={playerDeck} opponentDeck={opponentDeck}/>}
        ></Route>
        <Route
          path="/the-deck"
          element={
            <CardCollection
              gameCards={gameCards}
              handleDeleteCard={handleDeleteCard}
              handleupdateCard={handleupdateCard}
            />
          }
        ></Route>
        <Route
          path="/add-card"
          element={
            <NewCardForm
              formData={formData}
              setFormData={setFormData}
              spreadPost={spreadPost}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
