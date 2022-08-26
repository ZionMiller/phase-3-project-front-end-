import React from 'react'
import { useState, useEffect } from 'react'
import { Card, Image } from "semantic-ui-react";


const PlayerHand = ({ pdeck }) => {

  const { name, image_url, health, attack, opponentId, playerId } = pdeck;

  console.log(pdeck)

  return (
    <Card className="Card">
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

export default PlayerHand;