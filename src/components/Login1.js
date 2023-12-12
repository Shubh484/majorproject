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
        <form>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
