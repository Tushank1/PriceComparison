import React from "react";
import "./App.css";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./page/Error";
import Product from "./page/Product";
import How_to_use from "./page/How";

function App() {
  return (
    <>
      <div className="app">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/How_to_use" element={<How_to_use />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
