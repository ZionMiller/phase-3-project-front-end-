import React from 'react';
import { Card } from "semantic-ui-react";
import GameCardDisplay from './GameCardDisplay';

function CardCollection( {gameCards} ) {
  return (
    <Card.Group itemsPerRow={4}>
        {gameCards.map((gameCard) => (
            <GameCardDisplay
                gameCard={gameCard}
                handleDeleteCard={handleDeleteCard}
            />
            )
        )}
    </Card.Group>
  )
}

export default CardCollection

