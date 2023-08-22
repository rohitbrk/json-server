import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setUsers((prev) => data);
  };

  return (
    <>
      <button onClick={getUsers}>get users</button>
      <div>
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              name: {item.name} | age: {item.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
