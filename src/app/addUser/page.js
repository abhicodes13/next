"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const response = await axios.post(process.env.API, {
        name,
        email,
      });
      console.log("User added:", response.data);
      router.push("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <div
      className="flex justify-center items-center gap-4
    "
    >
      Add a new POST
      <br />
      <br />
      <br />
      <form action="post" onSubmit={onSubmit}>
        <label>Name</label>
        <br />
        <input
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Email</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default page;
