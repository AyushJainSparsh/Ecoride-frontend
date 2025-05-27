// src/pages/Notifications.jsx
const notifications = [
  { id: 1, message: "Your ride to Delhi has been accepted.", time: "2h ago" },
  { id: 2, message: "New message from Ananya.", time: "4h ago" },
  { id: 3, message: "Ride canceled by Vikram.", time: "1d ago" },
  { id: 4, message: "New user joined your ride group.", time: "2d ago" },
];

const Notifications = () => {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-green-700 mb-4">All Notifications</h1>
      <ul className="space-y-4">
        {notifications.map((note) => (
          <li key={note.id} className="p-4 bg-white shadow-md rounded-md">
            <p>{note.message}</p>
            <p className="text-sm text-gray-500">{note.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
