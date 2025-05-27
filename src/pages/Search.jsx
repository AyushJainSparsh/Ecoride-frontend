import { useState } from "react";
import RideCard from "../components/RideCard";
import dummyRides from "../data/dummyRides";

const Search = () => {
  const [filters, setFilters] = useState({
    from: "",
    to: "",
    date: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // Filter rides based on user inputs
  const filteredRides = dummyRides.filter((ride) => {
    return (
      (filters.from === "" || ride.from.toLowerCase().includes(filters.from.toLowerCase())) &&
      (filters.to === "" || ride.to.toLowerCase().includes(filters.to.toLowerCase())) &&
      (filters.date === "" || ride.date === filters.date)
    );
  });

  return (
    <div className="min-h-screen p-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-6 text-green-700">Search Rides</h1>

      {/* Search Filters */}
      <form className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          name="from"
          value={filters.from}
          onChange={handleChange}
          placeholder="From"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="text"
          name="to"
          value={filters.to}
          onChange={handleChange}
          placeholder="To"
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleChange}
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        {/* Optional: Reset Button */}
        <button
          type="button"
          onClick={() => setFilters({ from: "", to: "", date: "" })}
          className="bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 transition"
        >
          Reset
        </button>
      </form>

      {/* Ride Cards */}
      {filteredRides.length === 0 ? (
        <p className="text-gray-600">No rides found matching your criteria.</p>
      ) : (
        <div className="grid gap-6">
          {filteredRides.map((ride) => (
            <RideCard key={ride.id} ride={ride} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
