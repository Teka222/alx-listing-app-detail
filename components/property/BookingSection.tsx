import { useState } from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const totalNights = checkIn && checkOut ? (new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 3600 * 24) : 0;
  const totalPrice = totalNights > 0 ? totalNights * price : price;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg sticky top-6">
      <h3 className="text-xl font-semibold">${price}/night</h3>

      <div className="mt-4">
        <label className="block">Check-in</label>
        <input type="date" className="border p-2 w-full mt-1 rounded-md" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
      </div>

      <div className="mt-4">
        <label className="block">Check-out</label>
        <input type="date" className="border p-2 w-full mt-1 rounded-md" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
      </div>

      <div className="mt-4 font-semibold">
        Total payment: ${totalPrice.toFixed(2)}
      </div>

      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md w-full hover:bg-green-600 transition">
        Reserve Now
      </button>
    </div>
  );
};

export default BookingSection;
