"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [users, setUsers] = useState([]);
  async function getUsers() {
    try {
      const response = await axios.get(process.env.FETCH);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers(); // Call only once when component mounts
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>All Users</h1>
      {users.length === 0 ? (
        <p>Loading....</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name || "Unnamed"}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
