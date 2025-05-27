import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages (create these files if they don't exist yet)
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostRide from "./pages/PostRide";
import Search from "./pages/Search";
import Dashboard from "./pages/Dashboard";
import RideDetails from "./pages/RideDetails";
import Profile from "./pages/Profile";
import Requests from "./pages/Requests";
import Chat from "./pages/Chat";
import Notifications from "./pages/Notifications";
import RideHistory from "./pages/RideHistory";
import Admin from "./pages/Admin"; 
import About from "./pages/About";
import Contact from "./pages/Contact"; 

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar /> {}
        <Toaster position="top-right" />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post-ride" element={<PostRide />} />
          <Route path="/search" element={<Search />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ride-details/:id" element={<RideDetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/requests" element={<Requests />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/ride-history" element={<RideHistory />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
         <Footer />
      </div>
    </Router>
  );
}

export default App;
