"use client";
import Link from "next/link";
import React from "react";

type Artist = {
  id: string;
  name: string;
  avatar?: string;
  price: number;
  rating: number;
  bio?: string;
};

export default function ArtistCard({ artist }: { artist: Artist }) {
  return (
    <div className="p-3 border rounded-lg flex items-center gap-3 bg-white">
      <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-medium overflow-hidden">
        {artist.avatar ? <img src={artist.avatar} alt={artist.name} className="w-full h-full object-cover" /> : artist.name.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <div className="font-semibold">{artist.name}</div>
            <div className="text-xs text-gray-500">{artist.bio}</div>
          </div>
          <div className="text-right">
            <div className="font-semibold">₹{artist.price}</div>
            <div className="text-xs text-yellow-600">{'★'.repeat(Math.round(artist.rating))} <span className="text-gray-400 text-xs">({artist.rating})</span></div>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <Link href={`/book/${artist.id}`}>
            <a className="px-3 py-1 bg-pink-600 text-white rounded-md text-sm">Book</a>
          </Link>
          <button className="px-3 py-1 border rounded-md text-sm">View</button>
        </div>
      </div>
    </div>
  );
}
