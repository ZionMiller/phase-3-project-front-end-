import React from "react";
import { useState } from "react";
import { Card, Image, Button, Form } from "semantic-ui-react";

function GameCardDisplay({ gameCard, handleDeleteCard, handleupdateCard }) {
  const [updateMenu, setUpdateMenu] = useState(false);
  const [newHealth, setNewHealth] = useState(1);
  
  const toggleUpdateMenu = () => {
    setUpdateMenu((updateMenu) => !updateMenu);
  };

  const { name, image_url, health, attack, opponentId, playerId } = gameCard;

  if (newHealth > 8) {
    setNewHealth(8);
  } else if (newHealth < 1) {
    setNewHealth(1);
  }

  const updateCard = () => {
    const updateObj = {
      name: name,
      image_url: image_url,
      health: newHealth,
      attack: attack,
      opponentId: 1,
      playerId: 1,
    };

    fetch(`http://localhost:9292/cards/${gameCard.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateObj),
    })
      .then((res) => res.json())
      .then(handleupdateCard);
  };

  const deleteCard = () => {
    fetch(`http://localhost:9292/cards/${gameCard.id}`, {
      method: "DELETE",
    });
    handleDeleteCard(gameCard);
  };

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
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green" onClick={toggleUpdateMenu}>
            Update Card
          </Button>
          <Button basic color="red" onClick={deleteCard}>
            Delete Card
          </Button>
        </div>
        {updateMenu ? (
          <Form>
            <Form.Field>
              <label>New Health Value</label>
              <input
                placeholder="New Health For Card (1-8)"
                type="number"
                onChange={(e) => setNewHealth(e.target.value)}
              />
            </Form.Field>
            <button onClick={updateCard}>Update Card</button>
          </Form>
        ) : null}
      </Card.Content>
    </Card>
  );
}

export default GameCardDisplay;
