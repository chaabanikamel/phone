import React, { useState } from "react";
import styles from "./styles.module.css";
import Form from "./Form"; // Correct import path

const { classForm } = styles;

import { v4 as uuidv4 } from 'uuid';

const intState = {
  id: uuidv4(),
  name: "",
  age: "",
  location: "",
  phone: "",
};

const UserForm = ({ addUser }) => {
  const [form, setForm] = useState(intState);

  const handleChangeInput = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setForm((prevValue) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  const formHandler = (e) => {
    e.preventDefault();
    addUser(form);
    setForm(intState);
  };

  const dataForm = [
    { name: "name", value: form.name },
    { name: "age", value: form.age },
    { name: "location", value: form.location },
    { name: "phone", value: form.phone }, // Fix: Change "name" to "phone"
  ];

  const inputs = dataForm.map((input) => (
    <Form key={input.name} name={input.name} value={input.value} onChange={handleChangeInput} />
  ));

  return (
    <div className={classForm}>
      <form onSubmit={formHandler}>
        {inputs}

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;