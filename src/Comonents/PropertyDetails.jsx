// import React from "react";

// export default function PropertyDetails() {
//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center py-10">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl w-full">
//         <div className="flex flex-col lg:flex-row">
//           <div className="flex-1">
//             <img
//               src="src/assets/h6.jpg"
//               alt="Property"
//               className="rounded-lg w-full h-[50vh] object-cover"
//             />
//             <p className="text-gray-700 mt-4 font-semibold">Ksh 9,000/Month</p>
//             <p className="text-gray-500">Westlands, Nairobi</p>
//           </div>

//           <div className="lg:w-1/3 lg:ml-6">
//             <div className="grid grid-cols-3 gap-2 mb-4">
//               <img
//                 src="src/assets/d1.jpg"
//                 alt="Thumbnail"
//                 className="rounded-lg w-full h-[10vh] object-cover cursor-pointer"
//               />

//               <img
//                 src="src/assets/d2.jpg"
//                 alt="Thumbnail"
//                 className="rounded-lg w-full h-[10vh] object-cover cursor-pointer"
//               />

//               <img
//                 src="src/assets/d3.jpg"
//                 alt="Thumbnail"
//                 className="rounded-lg w-full h-[10vh] object-cover cursor-pointer"
//               />

//               <img
//                 src="src/assets/d4.jpg"
//                 alt="Thumbnail"
//                 className="rounded-lg w-full h-[10vh] object-cover cursor-pointer"
//               />

//               <img
//                 src="src/assets/d5.jpg"
//                 alt="Thumbnail"
//                 className="rounded-lg w-full h-[10vh] object-cover cursor-pointer"
//               />

//               <img
//                 src="src/assets/d11.jpg"
//                 alt="Thumbnail"
//                 className="rounded-lg w-full h-[10vh] object-cover cursor-pointer"
//               />

//             </div>

//             <div className="bg-gray-50 p-4 rounded-lg shadow">
//               <h3 className="text-lg font-bold text-gray-800 mb-4">
//                 Listed by:
//               </h3>
//               <div className="flex items-center mb-2">
//                 <p className="font-semibold text-gray-700">Sekani Owners</p>
//                 <span className="text-gray-500 ml-auto">Offline</span>
//               </div>
//               <p className="text-gray-500 mb-2">
//                 Listed time on SafeRentals: 2Days 7Hours
//               </p>
//               <div className="space-y-2">
//                 <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
//                   Call Agent
//                 </button>
//                 <button className="w-full border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
//                   Message Agent
//                 </button>
//               </div>
//               <p className="text-gray-500 mt-4 text-sm">
//                 Unable to reach the agent? Simply request a callback to alert
//                 them to contact you.
//               </p>
//               <button className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
//                 Request Call Back
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="mt-8">
//           <h3 className="text-lg font-bold text-gray-800 mb-4">
//             Amenities Available
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//             {[
//               "Parking",
//               "Swimming Pool",
//               "All Ensuite",
//               "Closed Kitchen",
//               "Kids Play Area",
//               "Electric Fence",
//               "Club House",
//               "Servant Quarters (SQ)",
//               "Laundry Area",
//               "Fitness Center",
//               "Backup Generator",
//               "Gym",
//               "Rooftop Terrace",
//               "Walk-in Closet",
//             ].map((amenity, index) => (
//               <p
//                 key={index}
//                 className="flex items-center text-gray-700 font-medium"
//               >
//                 <span className="text-green-500 mr-2">✔</span> {amenity}
//               </p>
//             ))}
//           </div>
//         </div>

//         <div className="mt-8">
//           <h3 className="text-lg font-bold text-gray-800 mb-4">
//             About The House
//           </h3>
//           <p className="text-gray-600">
//             4 bedroom all en suite, fully furnished maisonette on sale in
//             Springvalle.
//             <br />
//             The house is spacious with great proximity to amenities and a serene
//             environment.
//             <br />
//             It comes with all the modern facilities, including:
//             <ul className="list-disc list-inside">
//               <li>All-ensuite bedrooms</li>
//               <li>Well-fitted kitchen</li>
//               <li>Private garden</li>
//               <li>Backup generator</li>
//             </ul>
//             <br />
//             For more inquiries, call us now.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaBed, FaBath, FaToilet, FaMapMarkerAlt } from "react-icons/fa";

export default function PropertyDetails() {
  const location = useLocation();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    // Check if listing data is available in location.state
    if (location.state?.listing) {
      setListing(location.state.listing);
    } else {
      console.error("No listing data available.");
    }
  }, [location.state]);

  // Display loading state while the listing is being loaded
  if (!listing) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center py-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row">
          {/* Main Property Image */}
          <div className="flex-1">
            <img
              src={listing.images[0]} // Display first image of the listing
              alt="Property"
              className="rounded-lg w-full h-[50vh] object-cover"
            />
            <p className="text-gray-700 mt-4 font-semibold">Ksh {listing.price}/Month</p>
            <p className="text-gray-500">{listing.location}</p>
          </div>

          {/* Thumbnail Images */}
          <div className="lg:w-1/3 lg:ml-6">
            <div className="grid grid-cols-3 gap-2 mb-4">
              {listing.images.slice(1, 6).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="rounded-lg w-full h-[10vh] object-cover cursor-pointer"
                />
              ))}
            </div>

            {/* Agent Info and Call-to-Actions */}
            <div className="bg-gray-50 p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Listed by:</h3>
              <div className="flex items-center mb-2">
                <p className="font-semibold text-gray-700">Sekani Owners</p>
                <span className="text-gray-500 ml-auto">Offline</span>
              </div>
              <p className="text-gray-500 mb-2">
                Listed time on SafeRentals: 2Days 7Hours
              </p>
              <div className="space-y-2">
                <button className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                  Call Agent
                </button>
                <button className="w-full border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
                  Message Agent
                </button>
              </div>
              <p className="text-gray-500 mt-4 text-sm">
                Unable to reach the agent? Simply request a callback to alert
                them to contact you.
              </p>
              <button className="w-full mt-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
                Request Call Back
              </button>
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Amenities Available</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              "Parking",
              "Swimming Pool",
              "All Ensuite",
              "Closed Kitchen",
              "Kids Play Area",
              "Electric Fence",
              "Club House",
              "Servant Quarters (SQ)",
              "Laundry Area",
              "Fitness Center",
              "Backup Generator",
              "Gym",
              "Rooftop Terrace",
              "Walk-in Closet",
            ].map((amenity, index) => (
              <p key={index} className="flex items-center text-gray-700 font-medium">
                <span className="text-green-500 mr-2">✔</span> {amenity}
              </p>
            ))}
          </div>
        </div>

        {/* About the Property */}
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">About The House</h3>
          <p className="text-gray-600">
            {listing.description}
            <br />
            For more inquiries, call us now.
          </p>
        </div>

        {/* Property Details */}
        <div className="mt-8 bg-[#470E0E] text-white p-4 rounded-lg">
          <div className="flex justify-between">
            <span className="flex items-center">
              <FaBed />
              {listing.bedrooms || "N/A"} Bedrooms
            </span>
            <span className="flex items-center">
              <FaBath />
              {listing.bathrooms || "N/A"} Bathrooms
            </span>
            <span className="flex items-center">
              <FaToilet />
              {listing.toilets || "N/A"} Toilets
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
