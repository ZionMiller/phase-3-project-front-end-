import React from 'react';
import { Card } from "semantic-ui-react";
import GameCardDisplay from './GameCardDisplay';

function CardCollection( {gameCards} ) {
  return (
    <Card.Group itemsPerRow={8}>
        {gameCards.map((gameCard) => (
            <GameCardDisplay
                gameCard={gameCard}
            />
            )
        )}
    </Card.Group>
  )
}

export default CardCollection

