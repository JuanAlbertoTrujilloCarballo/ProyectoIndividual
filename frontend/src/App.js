// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home/home";
import EventList from "./pages/List/eventList";

import AddEvent from "./pages/Add/addEvent";

import Event from "./components/Event/event"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/home" element={<Home />} />
        <Route path="/eventList" element={<EventList />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </Router>
  );
}

export default App;
