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
    setForm(form);
    const reqObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(
        form
      ),
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
        {/* <select name="health" */}
        <label>Health</label>
          <input placeholder='Card Health' 
            value={form.health}  
            onChange={handleChange}   
          />
      </Form.Field>
      <Form.Field>
      <label>Attack</label>
        <input placeholder='Attack' 
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
