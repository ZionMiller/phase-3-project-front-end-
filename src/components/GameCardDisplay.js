import React from 'react';
import { Card, Image } from 'semantic-ui-react';

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
        <Image src={image_url}  wrapped ui={false} />
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <h2>{health}</h2>
            <h2>{attack}</h2>
            <h2>{opponentId}</h2>
            <h2>{playerId}</h2>
        </Card.Content>
    </Card>
  )
}

export default GameCardDisplay