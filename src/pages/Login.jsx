import React, { useState, useEffect } from "react";

// "/login" and "/register"
//(this could alternatively be displayed in the profile instead of living in its own route)

export const Login = () => {
  //State Managment
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  //Base URL variables
  const cohortName = "2302-acc-pt-web-pt-d";
  const baseURL = `https://strangers-things.herokuapp.com/${cohortName}`;

  //POST Login
  const handleLogin = async () => {
    try {
      const response = await fetch(`${baseURL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const result = await response.json();
      if (response.ok) {
        console.log(response)
        setToken(result.data.token);
      } else {
        console.error(result.token);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // POST Register User
  const handleRegistration = async () => {
    try {
      const response = await fetch(`${baseURL}/users/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password,
          },
        }),
      });
      const result = await response.json();
      if (response.ok) {
        setToken(result.data.token);
      } else {
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to Stranger's Things</h1>
      <p>Please login to your existing account or becoming a new stranger!</p>
      <div className="login-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRegistration}>Become a Stranger</button>
      </div>
      {/* Token Authentication */}
      {token && <p>Token Generated</p>}
    </div>
  );
};
