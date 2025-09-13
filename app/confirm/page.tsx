"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Confirm() {
  const search = useSearchParams();
  const bid = search.get("bid");
  const [booking, setBooking] = useState<any>(null);

  useEffect(() => {
    if (!bid) return;
    const arr = JSON.parse(localStorage.getItem("bookings") || "[]");
    const b = arr.find((x: any) => x.id === bid);
    setBooking(b);
  }, [bid]);

  if (!booking) {
    return <div className="max-w-2xl mx-auto px-4 py-6">Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold">Booking Confirmed</h1>
      <div className="mt-4 border rounded p-4">
        <div className="text-sm text-gray-600">
          Booking ID: <span className="font-mono">{booking.id}</span>
        </div>
        <div className="mt-2"><strong>Artist:</strong> {booking.artistName}</div>
        <div><strong>Client:</strong> {booking.name}</div>
        <div><strong>Contact:</strong> {booking.contact}</div>
        <div><strong>Date & Time:</strong> {booking.date} {booking.time}</div>
        <div className="mt-4">
          <Link href="/my-bookings" className="text-pink-600">View all bookings</Link>
        </div>
      </div>
    </div>
  );
}
