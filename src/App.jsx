import { useState } from "react";
import { UserInfo, Container, UserForm } from "./components";

function App() {
  const [userData, setUserData] = useState([
    { id: 1, name: "samar", age: "27", location: "Tunisia", phone: "123457" },
    { id: 2, name: "keith", age: "24", location: "Vanuatu", phone: "123457" },
    { id: 3, name: "Antonio", age: "20", location: "Tunisia", phone: "123257" },
  ]);
  const userList = userData.map((user) => (
    <UserInfo
      key={user.id}
      name={user.name}
      age={user.age}
      location={user.location}
      phone={user.phone}
    />
  ));

  const addUser = (newUser) => {
    // newUser.id = Math.floor(Math.random() * 100);
    setUserData([...userData, newUser]);
  };

  return (
    <div>
      <Container>
        <UserForm addUser={addUser} />
      </Container>

      <Container>{userList}</Container>
    </div>
  );
}

export default App;
