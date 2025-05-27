import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    { id: 1, message: "Your ride to Delhi has been accepted.", time: "2h ago" },
    { id: 2, message: "New message from Ananya.", time: "4h ago" },
    { id: 3, message: "Ride canceled by Vikram.", time: "1d ago" },
  ];

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-green-700">EcoRide</div>

      {/* Links */}
      <div className="flex gap-4 items-center">
        <NavLink to="/" className="hover:text-green-600">Home</NavLink>
        <NavLink to="/search" className="hover:text-green-600">Search</NavLink>
        <NavLink to="/post-ride" className="hover:text-green-600">Post Ride</NavLink>
        <NavLink to="/dashboard" className="hover:text-green-600">Dashboard</NavLink>
        <NavLink to="/chat" className="hover:text-green-600">Chat</NavLink>

        {/* 🔔 Notification Icon */}
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)} className="relative">
            <span className="material-icons">notifications</span>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </button>

          {/* Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-white border rounded shadow-md z-50">
              <div className="p-4 border-b font-semibold">Notifications</div>
              <ul className="max-h-64 overflow-y-auto">
                {notifications.map((note) => (
                  <li key={note.id} className="p-3 border-b text-sm hover:bg-gray-100">
                    {note.message}
                    <div className="text-xs text-gray-500">{note.time}</div>
                  </li>
                ))}
              </ul>
              <NavLink
                to="/notifications"
                className="block text-center text-green-700 p-2 hover:bg-gray-100"
              >
                View All
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
