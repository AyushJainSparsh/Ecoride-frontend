// src/pages/Dashboard.jsx
const Dashboard = () => {
  const rides = {
    upcoming: [
      { id: 1, from: "Delhi", to: "Noida", date: "2025-06-01" },
      { id: 2, from: "Gurgaon", to: "Faridabad", date: "2025-06-05" },
    ],
    past: [
      { id: 3, from: "Chandigarh", to: "Delhi", date: "2025-05-20" },
      { id: 4, from: "Noida", to: "Ghaziabad", date: "2025-05-10" },
    ],
    cancelled: [
      { id: 5, from: "Delhi", to: "Panipat", date: "2025-05-01" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Upcoming Rides */}
        <div>
          <h2 className="text-xl font-semibold text-green-600 mb-4">Upcoming Rides</h2>
          <div className="space-y-4">
            {rides.upcoming.map((ride) => (
              <div key={ride.id} className="bg-white p-4 shadow rounded-md border">
                <p><strong>From:</strong> {ride.from}</p>
                <p><strong>To:</strong> {ride.to}</p>
                <p><strong>Date:</strong> {ride.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Rides */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Past Rides</h2>
          <div className="space-y-4">
            {rides.past.map((ride) => (
              <div key={ride.id} className="bg-white p-4 shadow rounded-md border">
                <p><strong>From:</strong> {ride.from}</p>
                <p><strong>To:</strong> {ride.to}</p>
                <p><strong>Date:</strong> {ride.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cancelled Rides */}
        <div>
          <h2 className="text-xl font-semibold text-red-600 mb-4">Cancelled Rides</h2>
          <div className="space-y-4">
            {rides.cancelled.map((ride) => (
              <div key={ride.id} className="bg-white p-4 shadow rounded-md border">
                <p><strong>From:</strong> {ride.from}</p>
                <p><strong>To:</strong> {ride.to}</p>
                <p><strong>Date:</strong> {ride.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
