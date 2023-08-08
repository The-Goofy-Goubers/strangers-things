import React from "react";

// "/login" and "/register"
//(this could alternatively be displayed in the profile instead of living in its own route)

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
    </div>
  );
};
