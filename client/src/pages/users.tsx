import { useState, useEffect } from "react";
import api from "../api/api";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const Users = (url: any) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await api.getUsers();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}
            , <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
