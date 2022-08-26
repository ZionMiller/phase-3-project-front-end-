import React from "react";
import { useState, useEffect } from "react";
import PlayerHand from "./PlayerHand";
import OpponentHand from "./OpponentHand";
import { Card } from "semantic-ui-react";

const PlayGame = ({ playerDeck, opponentDeck }) => {
  // const [playerHand, setPlayerHand] = useState([]);
  // const [playerDeck, setPlayerDeck] = useState([]);
  // const [opponentHand, setOpponentHand] = useState([]);
  // const [opponentDeck, setOpponentDeck] = useState([]);

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
