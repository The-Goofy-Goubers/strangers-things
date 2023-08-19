import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>Home </Link>|
      <Link to={"./pages/Posts"}>Posts </Link>|
      <Link to={"/pages/Profile"}> Profile </Link>|
      <Link to={"/pages/Login"}> Login </Link>|
      <Link to={"/pages/Register"}> Register</Link>

    </div>
  );
}
