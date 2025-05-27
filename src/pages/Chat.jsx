import { useState } from "react";

const dummyUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

const dummyMessages = [
  { from: "Alice", text: "Hey, are we still on for the ride?" },
  { from: "You", text: "Yes! I'll be there at 10 AM." },
  { from: "Alice", text: "Cool, see you then." },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(dummyUsers[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="flex h-[90vh]">
      {/* Sidebar */}
      <div className="w-1/4 bg-green-100 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Chats</h2>
        {dummyUsers.map((user) => (
          <div
            key={user.id}
            className={`p-2 rounded cursor-pointer mb-2 ${
              selectedUser.id === user.id ? "bg-green-300" : "hover:bg-green-200"
            }`}
            onClick={() => setSelectedUser(user)}
          >
            {user.name}
          </div>
        ))}
      </div>

      {/* Chat Window */}
      <div className="w-3/4 p-4 flex flex-col">
        <div className="flex-1 overflow-y-auto mb-4 bg-gray-50 rounded p-4">
          <h3 className="text-lg font-semibold mb-2">Chat with {selectedUser.name}</h3>
          {dummyMessages.map((msg, index) => (
            <div key={index} className={`mb-2 ${msg.from === "You" ? "text-right" : "text-left"}`}>
              <span className="inline-block bg-green-200 px-3 py-1 rounded">{msg.text}</span>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border rounded-l px-4 py-2 focus:outline-none"
          />
          <button
            className="bg-green-600 text-white px-4 rounded-r hover:bg-green-700"
            onClick={() => {
              // Just clear input for now
              setMessage("");
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
