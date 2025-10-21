import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "@/pages";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
