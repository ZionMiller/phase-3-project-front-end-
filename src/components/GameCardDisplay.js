import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

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
        <Image src={image_url}  height={180} />
        <Card.Content>
            <Card.Header textAlign='center'>{name}</Card.Header>
            <h2>{opponentId}</h2>
            <h2>{playerId}</h2>
            {/* <Button positive>Update Card</Button>
            <Button negative>Delete Card</Button> */}
        <Card.Description textAlign='center'>
        <h3>Health: {health} | Attack: {attack}</h3>
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Update Card
          </Button>
          <Button basic color='red'>
            Delete Card
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default GameCardDisplay