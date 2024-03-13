import { useState, useEffect } from "react";
import api from "../api/api";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

interface Error {
  message: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await api.getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError(error as Error);
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <p>Error fetching users: {error.message}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user: User) => (
          <li key={user.id} data-testid={`user-${user.id}`}>
            <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}
            , <strong>Email:</strong> {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
