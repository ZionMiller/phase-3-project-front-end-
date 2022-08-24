import React from 'react';
import { Card } from 'semantic-ui-react';

function GameCardDisplay( {gameCard} ) {
  
  const { 
    name,
    image_url,
    health,
    attack,
    opponentId,
    playerId
  } = gameCard
  
  return (
    <Card className="Card">
        <Card.Content>
            <div>GameCardDisplay</div>
            <h2>{name}</h2>
            <img src={image_url} alt="Card"/>
            <h2>{health}</h2>
            <h2>{attack}</h2>
            <h2>{opponentId}</h2>
            <h2>{playerId}</h2>
        </Card.Content>
    </Card>
  )
}

export default GameCardDisplay