"use client";

import React from "react";
import { Service } from "@/types/CommonTypes";

interface Props {
  service_details: Service;
  setSelectedIndex: (index: number) => void;
}

const FullDescription: React.FC<Props> = ({ service_details, setSelectedIndex }) => {
  return (
    <div className="p-4">
      {/* Service Name */}
      <h2 className="text-2xl font-bold mb-2">{service_details?.name}</h2>

      {/* Service Price */}
      <p className="text-lg text-gray-600 mb-4">
        Price: ₹{service_details?.price ?? "N/A"}
      </p>

      {/* Service Description */}
      <p className="text-gray-700 mb-6">
        {service_details?.description ?? "No description available."}
      </p>

      {/* Book Now button */}
      <button
        onClick={() => setSelectedIndex(2)} // Switch to Booking tab
        className="mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-md shadow transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default FullDescription;
