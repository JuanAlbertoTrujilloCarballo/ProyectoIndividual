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
import AppUserList from "./pages/List/appuserList";
import AddEvent from "./pages/Add/addEvent";
import AddAppUser from "./pages/Add/addUser";
import Event from "./components/Event/event"
import AppUser from "./components/AppUser/appUser"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/eventList" element={<EventList />} />
        <Route path="/appuserList" element={<AppUserList />} />
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/addAppUser" element={<AddAppUser />} />
        <Route path="/event/:id" element={<Event/>} />
        <Route path="/appuser/:id" element={<AppUser/>} />
      </Routes>
    </Router>
  );
}

export default App;
