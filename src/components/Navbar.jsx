import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"./pages/Posts"}>Posts</Link>
      <Link to={"/pages/Profile"}>Profile</Link>
      <Link to={"/pages/Login"}>Login</Link>
    </div>
  );
}
