import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Download from "./components/Download";
import Watch from "./components/Watch";
import Location from "./components/Location";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && <Header />}
      <hr className="border-4 border-zinc-800" />
      
      <Routes>
        <Route path="/" element={
          <>
            <Watch />
            <hr className="border-4 border-zinc-800" />
            <Download />
            <hr className="border-4 border-zinc-800" />
            <Location />
            <hr className="border-4 border-zinc-800" />
            <Profile />
            <hr className="border-4 border-zinc-800" />
            <Faq />
            <hr className="border-4 border-zinc-800" />
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
