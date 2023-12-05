import { useState } from "react";
import styles from "./styles.module.css";
const { classForm } = styles;
import { v4 as uuidv4 } from 'uuid';
const intState = {
  id:uuidv4(),
  name: "",
  age: "",
  location: "",
  phone: "",
};

const value ==[{
   name:"name",
   type:"text",
   handleChangeInput:handleChangeInput(),
   value:form.name
},{

},{

},{

},]
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
    // console.log(testInput.current.value)
  };
 const form =[{ id:1,},]
  return (
    <div className={classForm}>
      <form onSubmit={formHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
-          onChange={handleChangeInput}
        />

        <label htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          value={form.age}
          onChange={handleChangeInput}
  
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          value={form.location}
          onChange={handleChangeInput}
        />

<label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChangeInput}
        />


    

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
