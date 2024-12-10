import React, { useState } from "react";
import Profile from "./Profile";

export default function ListingForm() {
  const [selectedPlan, setSelectedPlan] = useState("month");

  return (
    <div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">

    <div className="w-full md:w-1/3 rounded-lg  p-6">
        <Profile />
      </div>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Listing</h1>
        {/* Type and Location */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-600 mb-2">Type</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="type" className="form-radio" />
                <span>Apartment</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="type" className="form-radio" />
                <span>Bungalow</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="type" className="form-radio" />
                <span>Maisonette</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-2">Location</label>
            <input
              type="text"
              placeholder="Type Your Location"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200 focus:border-red-400 p-3"
            />
          </div>
        </div>

        {/* Bedrooms, Rent, and Toilets */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          <div>
            <label className="block font-semibold text-gray-600 mb-2">
              No of Bedrooms
            </label>
            <input
              type="text"
              placeholder="3 Bedrooms"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200 focus:border-red-400 p-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-2">
              No of Bedrooms
            </label>
            <input
              type="text"
              placeholder="3 Bedrooms"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200 focus:border-red-400 p-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-2">
              Monthly Rent (Ksh)
            </label>
            <input
              type="text"
              placeholder="9,000"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200 focus:border-red-400 p-3"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-2">Toilets</label>
            <input
              type="text"
              placeholder="3"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200 focus:border-red-400 p-3"
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-4 gap-6 mt-6">
          {[
            "Master Ensuite",
            "Pets Allowed",
            "Open Kitchen",
            "Elevator/ Lift",
            "Steam and Sauna",
            "CCTV Surveillance",
            "Restaurant within",
            "Backyard/ Garden",
            "Parking",
            "Swimming Pool",
            "All Ensuite",
            "Closed Kitchen",
            "Kids Play Area",
            "Borehole",
            "Electric Fence",
            "Club House",
          ].map((feature, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>{feature}</span>
            </label>
          ))}
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="block font-semibold text-gray-600 mb-2">
            Description
          </label>
          <textarea
            placeholder="Write your description here..."
            className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200 focus:border-red-400 p-3"
            rows={5}
          ></textarea>
        </div>

        {/* Property Images */}
        <div className="mt-6">
          <label className="block font-semibold text-gray-600 mb-2">
            Property Images
          </label>
          <div className="border border-gray-300 rounded-lg shadow-sm p-3 flex items-center justify-center">
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition">
              Upload Images
            </button>
          </div>
        </div>

        {/* Plans */}
        <div className="mt-6">
          <h3 className="font-bold text-gray-800 mb-4">Choose Your Plan</h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "WEEK", duration: "7 days", price: "Ksh 490" },
              { label: "Month", duration: "30 days", price: "Ksh 1,950" },
              { label: "Year", duration: "366 days", price: "Ksh 19,620" },
            ].map((plan, index) => (
              <div
                key={index}
                onClick={() => setSelectedPlan(plan.label.toLowerCase())}
                className={`border rounded-lg p-6 text-center cursor-pointer ${
                  selectedPlan === plan.label.toLowerCase()
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <h4 className="font-semibold text-gray-800">{plan.label}</h4>
                <p className="text-sm text-gray-500">{plan.duration}</p>
                <p className="font-bold text-gray-800 mt-2">{plan.price}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}
