// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home/home";
import List from "./pages/List/list";
import Add from "./pages/Add/add";
import Event from "./components/Event/event"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/add" element={<Add />} />
        <Route path="/event/:id" element={<Event/>} />
      </Routes>
    </Router>
  );
}

export default App;
