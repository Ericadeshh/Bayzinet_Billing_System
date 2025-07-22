import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Future routes like /admin, /plans, /connect, etc. can go here */}
      </Routes>
    </Router>
  );
};

export default App;
