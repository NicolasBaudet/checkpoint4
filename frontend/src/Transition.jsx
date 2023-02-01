import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

function Transition() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Error />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/connexion" element={<Connexionpage />} />
        <Route path="/concerned" element={<UserConcerned />} /> */}
      </Routes>
    </div>
  );
}

export default Transition;
