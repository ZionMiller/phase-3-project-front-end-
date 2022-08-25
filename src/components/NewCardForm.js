import React, { useState } from "react";
import { Button, Form, Menu, Dropdown } from 'semantic-ui-react'

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]

const NewCardForm = () => {
  const [form, setForm] = useState({});

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
      body: JSON.stringify(form),
    };
    fetch("http://localhost:9292/cards")
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
      <Button type='submit'>Submit</Button>
      </Form>
  );
};

export default NewCardForm;
