import React from 'react'
import { Card, Image } from "semantic-ui-react";

const OpponentHand = ( {oDeck} ) => {
  const { name, image_url, health, attack, opponentId, playerId } = oDeck;

  console.log("DEEPER DATA:", name)
  
  return (
    <Card className="opponent-hand">
    <Image src={image_url} height={180} />
    <Card.Content>
      <Card.Header textAlign="center">{name}</Card.Header>
      <h2>{opponentId}</h2>
      <h2>{playerId}</h2>
      <Card.Description textAlign="center">
        <h3>
          Health: {health} | Attack: {attack}
        </h3>
      </Card.Description>
    </Card.Content>
    </Card>
  )
}

export default OpponentHand;