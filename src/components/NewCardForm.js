import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const NewCardForm = ({ spreadPost, formData, setFormData }) => {
  const [newName, setNewName] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newHealth, setNewHealth] = useState(0);
  const [newAttack, setNewAttack] = useState(0);

  const newCard = {
    name: newName,
    image: newImage,
    health: newHealth,
    attack: newAttack,
  };

  function checkNewCard() {
    if (newCard.health > 8) {
      setNewHealth(8);
    } else if (newCard.health < 1) {
      setNewHealth(1);
    }
    if (newCard.attack > 6) {
      setNewAttack(6);
    } else if (newCard.attack < 1) {
      setNewAttack(1);
    }
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    alert("Your card has been added! Check 'the-deck' to view");
    fetch("http://localhost:9292/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    })
    .then((c) => c.json())
    .then((c) => {
      spreadPost(c);
    })
    .then(() => { e.target.reset() });
  }
  
  checkNewCard();

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Name</label>
        <input
          placeholder="Card Character Name"
          onChange={(e) => setNewName(e.target.value)}
          />
      </Form.Field>
      <Form.Field>
        <label>Image</label>
        <input
          placeholder="Image URL For Card"
          type="text"
          onChange={(e) => setNewImage(e.target.value)}
          />
      </Form.Field>
      <Form.Field>
        {/* <select name="health" */}
        <label>Health Choose 1-8</label>
        <input
          placeholder="Card Health"
          onChange={(e) => setNewHealth(e.target.value)}
          />
      </Form.Field>
      <Form.Field>
        <label>Attack Choose 1-6</label>
        <input
          placeholder="Attack"
          onChange={(e) => setNewAttack(e.target.value)}
          />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default NewCardForm;

// const handleSubmit = (e) => {
//   e.preventDefault();
//   alert("Your card has been added! Check 'the-deck' to view");
  
//   fetch("http://localhost:9292/cards", reqObj)
//   .then((res) => res.json())
//   .then((formData) => setFormData(formData))
//   .then(() => {
//     setNewName();
//     setNewImage();
//     setNewHealth();
//     setNewAttack();
//   });

//   // setFormData(formData);
//   const reqObj = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify({
//       name: setNewName,
//       image: setNewImage,
//       health: setNewHealth,
//       newAttack: setNewAttack,
//     }),
//   };
// };
