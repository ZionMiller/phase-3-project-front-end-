import React, { useState } from "react";
import { Button, Form, Menu, Dropdown } from 'semantic-ui-react'

const NewCardForm = ({ cardID }) => {
  const [form, setForm] = useState({
    name: "",
    image_url: "",
    health: 0,
    attack: 0
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setForm({ ...form, [e.target]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reqObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        image_url: form.image_url,
        health: form.health,
        attack: form.attack,
        // opponent_id: opponent_id,
        // player_id: player_id
      }),
    };
    fetch("http://localhost:9292/cards", reqObj)
      .then((res) => res.json())
      .then((form) => setForm(form));
  };

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Field>
        <label>Name</label>
          <input placeholder='First Name' 
          value={form.name}
          onChange={handleChange}
        />
      </Form.Field>
      <Form.Field>
        <label>Image</label>
          <input placeholder='place card image URL here' 
          value={form.image_url}
          onChange={handleChange}
          />
      </Form.Field>
      <Form.Field>
        <label>Health</label>
          <select placeholder='Card Health' 
            value={form.health}  
            onChange={handleChange}   
          />
      </Form.Field>
      <Form.Field>
      <label>Health</label>
        <select placeholder='Attack' 
          type="integer"
          attack="attack"
          value={form.attack}
          onChange={handleChange} 
        />
      </Form.Field>
      <Button type='submit' onclick={handleSubmit}>Submit</Button>
      </Form>
  );
};

export default NewCardForm;
