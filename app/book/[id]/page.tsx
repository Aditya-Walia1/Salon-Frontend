"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { artists } from "@/data/mock";
import Link from "next/link";

export default function BookPage({ params }: { params?: { id?: string } }) {
  const router = useRouter();
  const queryId = (typeof window !== "undefined") ? window.location.pathname.split("/").pop() : params?.id;
  const [artist, setArtist] = useState<any>(null);
  const [form, setForm] = useState({ name: "", contact: "", date: "", time: "" });

  useEffect(() => {
    const id = params?.id ?? queryId;
    const a = artists.find((x) => x.id === id);
    setArtist(a);
  }, [params]);

  function handleChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    if (!form.name || !form.contact || !form.date || !form.time) {
      alert("Please fill all fields");
      return;
    }
    const booking = {
      id: `bk_${Date.now()}`,
      name: form.name,
      contact: form.contact,
      date: form.date,
      time: form.time,
      artistId: artist?.id,
      artistName: artist?.name,
    };
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    existing.push(booking);
    localStorage.setItem("bookings", JSON.stringify(existing));
    router.push(`/confirm?bid=${booking.id}`);
  }

  if (!artist) return <div className="max-w-2xl mx-auto px-4 py-6">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <Link href={`/category/${artist.categories[0]}`}><a className="text-sm text-gray-500">← Back</a></Link>
      <h1 className="text-xl font-semibold mt-4">Book {artist.name}</h1>
      <p className="text-sm text-gray-600 mb-4">Price: ₹{artist.price} • Rating: {artist.rating}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Your Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Email / Phone</label>
          <input name="contact" value={form.contact} onChange={handleChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm">Date</label>
            <input name="date" type="date" value={form.date} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm">Time</label>
            <input name="time" type="time" value={form.time} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </div>
        </div>

        <div>
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-md">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
}