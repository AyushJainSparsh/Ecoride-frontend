import { useState } from "react";
import toast from 'react-hot-toast';


const PostRide = () => {
  const [form, setForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    seats: 1,
    price: "",
    vehicle: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  try {
    // Simulate API delay
    await new Promise(r => setTimeout(r, 1000));
    toast.success('Ride posted successfully!');
    setForm({
      from: "",
      to: "",
      date: "",
      time: "",
      seats: 1,
      price: "",
      vehicle: "",
      notes: "",
    });
    } catch (error) {
      toast.error('Failed to post ride. Please try again.');
    }
    setLoading(false);
  };


  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-lg max-w-lg w-full p-6">
        <h2 className="text-2xl font-semibold text-green-700 mb-6 text-center">Post a Ride</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-gray-700">From</label>
            <input
              type="text"
              name="from"
              value={form.from}
              onChange={handleChange}
              placeholder="Starting location"
              required
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">To</label>
            <input
              type="text"
              name="to"
              value={form.to}
              onChange={handleChange}
              placeholder="Destination"
              required
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-gray-700">Time</label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                required
                className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Seats Available</label>
            <select
              name="seats"
              value={form.seats}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            >
              {[...Array(10).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Price per Seat (₹)</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. 150"
              min="0"
              required
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Vehicle Info</label>
            <input
              type="text"
              name="vehicle"
              value={form.vehicle}
              onChange={handleChange}
              placeholder="Car model, license plate, etc."
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-gray-700">Additional Notes</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Any special info or instructions"
              rows={3}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Post Ride
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostRide;
