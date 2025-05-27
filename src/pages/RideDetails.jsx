import React from "react";
import { FaCarSide, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";

const RideCard = ({ ride }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 hover:shadow-lg transition cursor-pointer bg-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-green-700 mb-1">
            {ride.from} → {ride.to}
          </h3>
          <p className="text-gray-600">
            <time dateTime={ride.date}>{ride.date}</time> at {ride.time}
          </p>
          <p className="flex items-center gap-2 text-gray-600 mt-1">
            <FaUsers className="text-green-500" /> Seats available: {ride.seats}
          </p>
          {ride.vehicle && (
            <p className="flex items-center gap-2 text-gray-600 mt-1">
              <FaCarSide className="text-green-500" /> Vehicle: {ride.vehicle}
            </p>
          )}
        </div>

        <div className="mt-4 md:mt-0 flex flex-col items-start md:items-end">
          <p className="flex items-center gap-2 text-green-700 font-semibold text-lg">
            <FaMoneyBillWave /> ₹{ride.price} per seat
          </p>
          <Link
            to={`/ride-details/${ride.id}`}
            className="mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RideCard;
