import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

// Import the pages
import Page1 from "../src/Components/Page1";
import Page2 from "../src/Components/Page2";
import Page3 from "../src/Components/Page3";
import NoPage from "../src/Components/NoPage";
import Home from "../src/Components/Home";
import ABout from "./pages/About";

// Import css
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/about" element={<ABout />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
