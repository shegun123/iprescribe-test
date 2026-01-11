// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
// import LandingPage from './pages/LandingPage'

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
