import React, { useState } from "react";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </form>
      <form>
        <label>Image</label>
        <input
          type="img"
          image_url="image_url"
          value={form.image_url}
          onChange={handleChange}
        />
      </form>
      <form>
        <label>Health</label>
        <input
          type="integer"
          health="health"
          value={form.health}
          onChange={handleChange}
        />
      </form>
      <form>
        <label>Attack</label>
        <input
          type="integer"
          attack="attack"
          value={form.attack}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default NewCardForm;
