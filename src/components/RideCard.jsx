import { useParams } from "react-router-dom";
import dummyRides from "../data/dummyRides";

const RideDetails = () => {
  const { id } = useParams();
  const ride = dummyRides.find((r) => r.id.toString() === id);

  if (!ride) return <div className="p-4 text-red-600">Ride not found</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{ride.from} to {ride.to}</h2>
      <p>Date: {ride.date}</p>
      <p>Time: {ride.time}</p>
      <p>Seats: {ride.seats}</p>
      <p>Driver: {ride.driver}</p>
      {/* More details if needed */}
    </div>
  );
};

export default RideDetails;
