// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import Home from "./pages/Home/home";
import EventList from "./pages/List/eventList";
import AddEvent from "./pages/Add/addEvent";
import Event from "./components/Event/event";
import EditEvent from './components/EditEvent/editEvent';

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/User/Profile";
import BoardUser from "./components/Boards/userBoard";
import BoardAdmin from "./components/Boards/adminBoard";
import Header from './components/Header/header';


function App() {

  return (
   <>
      <Header/>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/eventList" element={<EventList />} />
            <Route path="/addEvent" element={<AddEvent />} />
            <Route path="/event/:id" element={<Event />} />
            <Route path="/editEvent/:id" element={<EditEvent/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
          </Routes>
        </Router>
      </>
  );
}

export default App;
