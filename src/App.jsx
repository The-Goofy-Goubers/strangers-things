import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/Homepage.jsx";
import { Login } from "./pages/Login";
import { Posts } from "./pages/Posts";
import { Profile } from "./pages/Profile";
import { Navbar } from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navigation Component */}
      <div>
        <Navbar />
      </div>
      {/* Routes */}
      <div>
        <Routes>
          <Route path="/pages/Login" element={<Login />} />
          <Route path="/pages/Posts" element={<Posts />} />
          <Route path="/pages/Profile" element={<Profile />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      
    
    </>
  );
}

export default App;
