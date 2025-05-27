const dummyUsers = [
  { id: 1, name: "Alice", email: "alice@example.com", rides: 3 },
  { id: 2, name: "Bob", email: "bob@example.com", rides: 5 },
  { id: 3, name: "Charlie", email: "charlie@example.com", rides: 2 },
];

const dummyRides = [
  { id: 101, from: "Delhi", to: "Agra", date: "2024-06-12", status: "Active" },
  { id: 102, from: "Pune", to: "Mumbai", date: "2024-05-27", status: "Completed" },
  { id: 103, from: "Bangalore", to: "Hyderabad", date: "2024-04-15", status: "Cancelled" },
];

const AdminDashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-700">Admin Dashboard</h1>

      {/* Users Table */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Rides</th>
              </tr>
            </thead>
            <tbody>
              {dummyUsers.map((user) => (
                <tr key={user.id} className="border-t">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.rides}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Rides Table */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Rides</h2>
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-green-600 text-white">
              <tr>
                <th className="p-3 text-left">Ride ID</th>
                <th className="p-3 text-left">From</th>
                <th className="p-3 text-left">To</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {dummyRides.map((ride) => (
                <tr key={ride.id} className="border-t">
                  <td className="p-3">{ride.id}</td>
                  <td className="p-3">{ride.from}</td>
                  <td className="p-3">{ride.to}</td>
                  <td className="p-3">{ride.date}</td>
                  <td className="p-3">{ride.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
