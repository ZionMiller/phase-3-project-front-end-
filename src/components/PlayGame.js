import React from "react";
import { useState } from 'react';
import { Form, Button } from "semantic-ui-react";

const PlayGame = ({ gameCards }) => {
  const [playerName, setPlayerName] = useState("");
  const [playerHand, setPlayerHand] = useState([]);
  const [playerDeck, setPlayerDeck] = useState([]);
  const [opponentHand, setOpponentHand] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);

  console.log(gameCards);

  function generateDecks() {
    // set player deck from card pool
    while (playerDeck.length < 10) {
      setPlayerDeck(gameCards[Math.floor(Math.random() * gameCards.length)]);
    }
    console.log(playerDeck);
    // set opponent deck from card pool
    while (opponentDeck.length < 10) {
      setOpponentDeck(gameCards[Math.floor(Math.random() * gameCards.length)]);
    }
    console.log(opponentDeck);
  }

  return playerDeck < 0 ? (
    <div className="new-game-form">
      <Form onSubmit={console.log(playerName)}>
        <Form.Field>
          <label>Please enter your name!</label>
          <input
            placeholder="Player Name"
            onChange={(e) => setPlayerName(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" onClick={generateDecks}>
          Submit
        </Button>
      </Form>
    </div>
  ) : (
    <div></div>
  );
};

export default PlayGame;
