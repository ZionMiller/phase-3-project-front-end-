import React from "react";
import { useState, useEffect } from "react";
import PlayerHand from "./PlayerHand";
import OpponentHand from "./OpponentHand";
import { Card } from "semantic-ui-react";

const PlayGame = ({ totalCards }) => {
  const [playerDeck, setPlayerDeck] = useState([]);
  const [opponentDeck, setOpponentDeck] = useState([]);

  const createDecks = () => {
    while (playerDeck.length < 10) {
      playerDeck.push(
        totalCards[Math.floor(Math.random() * totalCards.length)]
      );
    }
    while (opponentDeck.length < 10) {
      opponentDeck.push(
        totalCards[Math.floor(Math.random() * totalCards.length)]
      );
    }
  };

  console.log("Player deck:", playerDeck);
  console.log("Opponent deck:", opponentDeck);

  return (
    <>
      <p></p>
      <Card.Group itemsPerRow={5}>
        {playerDeck.map((pDeck) => {
          <PlayerHand pDeck={pDeck} />;
        })}
      </Card.Group>
      <Card.Group itemsPerRow={5}>
        {opponentDeck.map((oDeck) => {
          <OpponentHand oDeck={oDeck} />;
        })}
      </Card.Group>
    </>
  );
};

export default PlayGame;
