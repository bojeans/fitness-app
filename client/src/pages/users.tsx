import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/users");
        const data = await response.json();
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
