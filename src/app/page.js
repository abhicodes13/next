"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    try {
      const response = await axios.get(
        "https://next-ruby-psi-84.vercel.app/api"
      );
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://next-ruby-psi-84.vercel.app/api/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers(); // Call only once when component mounts
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>All Users</h1>

      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name || "Unnamed"}</strong> - {user.email}
            <button onClick={() => handleDelete(user._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
