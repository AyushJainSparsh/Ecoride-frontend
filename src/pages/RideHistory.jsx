import { useState } from "react";

const dummyRideHistory = [
  {
    id: 1,
    from: "Mumbai",
    to: "Pune",
    date: "2024-05-12",
    status: "Completed",
  },
  {
    id: 2,
    from: "Delhi",
    to: "Jaipur",
    date: "2024-04-28",
    status: "Cancelled",
  },
  {
    id: 3,
    from: "Bangalore",
    to: "Chennai",
    date: "2024-03-10",
    status: "Completed",
  },
];

const RideHistory = () => {
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredRides =
    statusFilter === "All"
      ? dummyRideHistory
      : dummyRideHistory.filter((ride) => ride.status === statusFilter);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-4 text-green-700">Ride History</h1>

      {/* Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-medium">Filter by Status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>
      </div>

      {/* Ride Cards */}
      <div className="space-y-4">
        {filteredRides.map((ride) => (
          <div
            key={ride.id}
            className="p-4 border rounded shadow-md bg-white flex justify-between items-center"
          >
            <div>
              <h2 className="text-lg font-semibold">{ride.from} → {ride.to}</h2>
              <p className="text-sm text-gray-500">{ride.date}</p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-white text-sm ${
                ride.status === "Completed"
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            >
              {ride.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideHistory;
