import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/Mutations";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [craeteUser, { error, loading }] = useMutation(CREATE_USER);

  const addUser = (e) => {
    e.preventDefault();
    craeteUser({
      variables: {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
      },
    });

    if (error) {
      console.log(error);
    }
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
