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
      
      <Routes>
        <Route path="/" element={
          <>
            <Watch />
            <Download />
            <Location />
            <Profile />
            <Faq />
          </>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
