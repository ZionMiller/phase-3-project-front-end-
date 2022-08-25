import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';


function GameCardDisplay( {gameCard, handleDeleteCard} ) {
  
  const { 
    name,
    image_url,
    health,
    attack,
    opponentId,
    playerId
  } = gameCard
  
  const updateCard = () => {
    const updateObj = {
      name: name,
      image_url: image_url,
      health: health,
      attack: attack,
      opponentId: 1,
      playerId: 1
    };
    fetch(`http://localhost:9292/cards${id}`), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    }
    .then((res) => res.json())
    .then(handleUpdateCard);
  }
  
  
  const handleDeleteCard = () => {
    fetch(`http://localhost:9292/cards${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        handleDeleteCard(card);
      });
  }

  return (
    <Card className="Card">
        <Image src={image_url}  height={180} />
        <Card.Content>
            <Card.Header textAlign='center'>{name}</Card.Header>
            <h2>{opponentId}</h2>
            <h2>{playerId}</h2>
        <Card.Description textAlign='center'>
        <h3>Health: {health} | Attack: {attack}</h3>
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green' onClick={updateCard}>
            Update Card
          </Button>
          <Button basic color='red' onClick={deleteCard}>
            Delete Card
          </Button>
        </div>
      </Card.Content>
    </Card>
  )
}

export default GameCardDisplay