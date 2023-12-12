import React, { useState } from "react";
import Dashboard from "./Dashboard";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simulated authentication - replace with actual authentication logic
    if (username === "exampleUser" && password === "password123") {
      setIsLoggedIn(true);
      // You can also store the authentication token or user info in local storage or cookies
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Clear the stored authentication token or user info in local storage or cookies
  };

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard></Dashboard>
      ) : (
        <form className="flex flex-col justify-center items-center absolute top-[4rem] left-[32rem] ">
          <img className="w-[8rem] mb-2" src="download.png"></img>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
