import React, { useState, useEffect } from "react";

// "/login" and "/register"
//(this could alternatively be displayed in the profile instead of living in its own route)

export const Login = () => {
  //State Managment
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //handleSubmit
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("you clicked me");

    //POST Login
    const cohortName = "2302-acc-pt-web-pt-d";
    const baseURL = `https://strangers-things.herokuapp.com/${cohortName}`;

    const submitLogin = async () => {
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
        console.log(result);
      } catch (err) {
        console.error(err);
      }
    };
    // Call the function to trigger the POST request
    submitLogin();
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
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
        <button onClick={handleSubmit}>Login</button>
      </div>
    </div>
  );
};
