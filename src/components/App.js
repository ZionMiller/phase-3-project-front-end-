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
  const [cardId, setCardId] = useState(0);
  const [cards, setCard] = useState([]);
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newHealth, setNewHealth] = useState(0);
  const [newAttack, setNewAttack] = useState(0);

  const newCard = {
    name: newName,
    image: newImage,
    health: newHealth,
    attack: newAttack,
  };

  useEffect(() => {
    fetch("http://localhost:9292/cards")
      .then((res) => res.json())
      .then((gameCards) => setGameCards(gameCards));
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    health: 0,
    attack: 0,
  });

  function checkNewCard() {
    if (newCard.health > 8) {
      setNewHealth(8);
    } else if (newCard.health < 1) {
      setNewHealth(1);
    }
    if (newCard.attack > 6) {
      setNewAttack(6);
    } else if (newCard.attack < 1) {
      setNewAttack(1);
    }
  }

  function handleDeleteCard(cardToDelete) {
    const updatedCards = cards.filter((card) => card.id !== cardToDelete.id);
    gameCards(updatedCards);
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
          element={<PlayGame gameCards={gameCards} />}
        ></Route>
        <Route
          path="/the-deck"
          element={
            <CardCollection
              gameCards={gameCards}
              handleDeleteCard={handleDeleteCard}
              handleupdateCard={handleupdateCard}
              checkNewCard={checkNewCard}
            />
          }
        ></Route>
        <Route
          path="/add-card"
          element={
            <NewCardForm
              formData={formData}
              setFormData={setFormData}
              newName={newName}
              setNewName={setNewName}
              newImage={newImage}
              setNewImage={setNewImage}
              newHealth={newHealth}
              setNewHealth={setNewHealth}
              newAttack={newAttack}
              setNewAttack={setNewAttack}
              newCard={newCard}
              checkNewCard={checkNewCard}
            />
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
