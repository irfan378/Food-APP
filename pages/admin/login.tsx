import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const login = () => {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="containers h-[calc(100vh-100px)] flex items-center justify-center">
      <div className="wrapper flex flex-col">
        <h1 className="text-4xl my-4 mx-4">Admin Dashboard</h1>
        <input
          placeholder="username"
          className="inputs h-10 mb-5 px-0 py-3 border-2 border-gray-500"
          onChange={(e: any) => setUsername(e.target.value)}
        />
        <input
          placeholder="password"
          className="inputs h-10 mb-5 px-0 py-3 border-2 border-gray-500"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button
          onClick={handleClick}
          className="buttons h-10 mb-5 text-white bg-teal-800 cursor-pointer font-semiboldu"
        >
          Sign In
        </button>
        {error&&<span className="error text-sm text-[red] ">Wrong Credentials!</span>}
      </div>
    </div>
  );
};

export default login;
