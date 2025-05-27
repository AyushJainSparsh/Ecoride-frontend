import React, { useState } from "react";
import dummyRequests from "../data/dummyRequests";

const Requests = () => {
  const [tab, setTab] = useState("incoming");

  const handleAccept = (id) => alert(`Accepted request ${id}`);
  const handleReject = (id) => alert(`Rejected request ${id}`);
  const handleCancel = (id) => alert(`Cancelled request ${id}`);

  const renderIncoming = () =>
    dummyRequests.incoming.map(({ id, ride, from, date, status }) => (
      <div key={id} className="bg-white shadow rounded p-4 mb-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{ride}</h3>
          <p>From: <span className="font-medium">{from}</span></p>
          <p>Date: {date}</p>
          <p>Status: <span className="text-yellow-600">{status}</span></p>
        </div>
        <div className="space-x-2">
          <button
            onClick={() => handleAccept(id)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded"
          >
            Accept
          </button>
          <button
            onClick={() => handleReject(id)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
          >
            Reject
          </button>
        </div>
      </div>
    ));

  const renderOutgoing = () =>
    dummyRequests.outgoing.map(({ id, ride, to, date, status }) => (
      <div key={id} className="bg-white shadow rounded p-4 mb-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{ride}</h3>
          <p>To: <span className="font-medium">{to}</span></p>
          <p>Date: {date}</p>
          <p>Status: <span className="text-yellow-600">{status}</span></p>
        </div>
        <div>
          <button
            onClick={() => handleCancel(id)}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    ));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold mb-6 text-green-700">My Requests</h2>

      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setTab("incoming")}
          className={`px-4 py-2 rounded ${
            tab === "incoming"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Incoming
        </button>
        <button
          onClick={() => setTab("outgoing")}
          className={`px-4 py-2 rounded ${
            tab === "outgoing"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Outgoing
        </button>
      </div>

      <div>{tab === "incoming" ? renderIncoming() : renderOutgoing()}</div>
    </div>
  );
};

export default Requests;
