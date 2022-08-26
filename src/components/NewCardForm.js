import React, { useState } from "react";
import { Button, Form, Menu, Dropdown } from "semantic-ui-react";

const NewCardForm = ({
  setNewName,
  setNewImage,
  setNewHealth,
  setNewAttack,
  formData,
  setFormData,
  checkNewCard,
  newCard,
}) => {
  const handleSubmit = () => {
    setFormData(formData);
    const reqObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newCard),
    };
    fetch("http://localhost:9292/cards", reqObj)
      .then((res) => res.json())
      .then((formData) => setFormData(formData));
  };
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
        <label>Health Choose 2-8</label>
        <input
          placeholder="Card Health"
          onChange={(e) => setNewHealth(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Attack Choose 2-6</label>
        <input
          placeholder="Attack"
          onChange={(e) => setNewAttack(e.target.value)}
        />
      </Form.Field>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default NewCardForm;
