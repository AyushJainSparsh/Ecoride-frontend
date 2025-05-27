// src/pages/Home.jsx
import heroImage from '../assets/hero.png';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
              Carpool Smart. Save Money. Go Green.
            </h1>
            <p className="text-lg mb-6">
              EcoRide helps you find and share rides to reduce costs, meet people, and protect the planet.
            </p>
            <div className="flex gap-4">
              <Link to="/post-ride" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
                Post a Ride
              </Link>
              <Link to="/search" className="border border-green-600 text-green-700 px-6 py-3 rounded-md hover:bg-green-100">
                Find a Ride
              </Link>
            </div>
          </div>
          <div>
            <img src={heroImage} alt="Carpool" className="w-full max-w-md mx-auto" />
          </div>
        </div>
      </section>

      {/* Why Carpool Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-6">Why Carpool with EcoRide?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              "Save on fuel and travel costs",
              "Reduce traffic and carbon emissions",
              "Meet new people and grow your network",
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-600 mt-1" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-8">How EcoRide Works</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold mb-2">1. Sign Up</h3>
              <p>Create an account and set up your profile.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2. Post or Search Rides</h3>
              <p>Offer a ride or join one with a few clicks.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">3. Travel Together</h3>
              <p>Connect, travel, and split the costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Dummy) */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-8">What Our Users Say</h2>
        <p className="text-gray-600">"EcoRide made my daily commute so affordable and fun!"</p>
        <p className="text-gray-500 mt-2">– Anjali, Pune</p>
      </section>
    </main>
  );
};

export default Home;
