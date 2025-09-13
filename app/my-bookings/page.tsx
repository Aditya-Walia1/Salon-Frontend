"use client";
import { useEffect, useState } from "react";

export default function MyBookings() {
  const [bookings, setBookings] = useState<any[]>([]);

  useEffect(() => {
    const arr = JSON.parse(localStorage.getItem("bookings") || "[]");
    setBookings(arr.reverse());
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold">My Bookings</h1>
      <div className="mt-4 space-y-3">
        {bookings.length === 0 ? (
          <div className="text-gray-500">No bookings yet.</div>
        ) : (
          bookings.map((b) => (
            <div key={b.id} className="border rounded p-3">
              <div className="flex justify-between">
                <div>
                  <div className="font-semibold">{b.artistName}</div>
                  <div className="text-sm text-gray-600">{b.date} {b.time}</div>
                </div>
                <div className="text-sm text-gray-500">{b.name}</div>
              </div>
              <div className="text-xs text-gray-400 mt-2">Booking ID: {b.id}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
