// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png'; // adjust path if different

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src={logo} alt="EcoRide Logo" className="h-12 mb-4" />
          <p className="text-sm">
            EcoRide is your go-to carpool platform to save money, reduce pollution, and travel together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/search" className="hover:underline">Search Rides</Link></li>
            <li><Link to="/post-ride" className="hover:underline">Post a Ride</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <p className="text-sm flex items-center gap-2 mb-2"><Mail size={16} /> support@ecoride.com</p>
          <p className="text-sm flex items-center gap-2"><MapPin size={16} /> India (Remote)</p>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-200"><Facebook /></a>
            <a href="#" className="hover:text-green-200"><Twitter /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-green-100">
        &copy; {new Date().getFullYear()} EcoRide. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
