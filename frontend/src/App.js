// import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import Video360 from "./pages/Video360";
// import AllRoutes from "./pages/AllRoutes";
// import RouteDetail from "./pages/RouteDetail";
import Home from "./pages/Home/home";
import List from "./pages/List/list";
import Add from "./pages/Add/add";
import Event from "./components/Event/event"

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/route-detail/:id" element={<RouteDetail />} />
        <Route path="/all-routes" element={<AllRoutes />} />
        <Route path="/video-360/:route/:stop" element={<Video360 />} /> */}
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
