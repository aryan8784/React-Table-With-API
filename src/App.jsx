import { useEffect, useState } from "react";
import "./App.css";
import UserData from "./components/UserData";
const API = "https://jsonplaceholder.typicode.com/users";
// const API = "https://jsonplaceholder.typicode.com/todos";
function App() {
  const [users, setUsers] = useState([]);

  const fetchUser = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        setUsers(data);
      }
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchUser(API);
  }, []);

  return (
    <>
      <h1 className="text-5xl  bg-yellow-200 p-4">React Table With API</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users} />
        </tbody>
      </table>
    </>
  );
}

export default App;
