import React, { useState } from "react";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    console.log(firstname, lastname, email, password);
  };

  return (
    <div>
      <form onSubmit={addUser}>
        <input
          type="text"
          placeholder="firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default Form;
