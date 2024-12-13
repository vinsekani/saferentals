// import { FaBed, FaBath, FaToilet, FaMapMarkerAlt } from "react-icons/fa";
// import { MdBookmark } from "react-icons/md";
// import { useEffect, useState } from "react";
// import { db } from "../firebase";
// import { collection, onSnapshot } from "firebase/firestore";

// export default function LatestListed({ saveItem }) {
//   const [listings, setListings] = useState([]);
//   const [savedIds, setSavedIds] = useState([]);

//   useEffect(() => {
//     const unsubscribe = onSnapshot(collection(db, "rentals"), (snapshot) => {
//       const fetchedListings = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       console.log("Fetched Listings:", fetchedListings);
//       setListings(fetchedListings);
//     });

//     return () => unsubscribe();
//   }, []);

//   const handleSave = (item) => {
//     if (!savedIds.includes(item.id)) {
//       saveItem(item);
//       setSavedIds((prev) => [...prev, item.id]);
//     }
//   };

//   return (
//     <div className="bg-gray-100 py-10">
//       <h2 className="text-center text-2xl font-bold mb-8">Latest Listed Rentals</h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
//         {listings.map((listing) => (
//           <div key={listing.id} className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
//             <img
//               src={listing.images}
//               alt="Rental House"
//               className="w-full h-48 object-cover"
//             />
//             {console.log(listing.images)}
//             <div className="p-4">
//               <div className="flex justify-between">
//                 <h3 className="text-red-600 font-semibold text-lg">{listing.type}</h3>
//                 <MdBookmark
//                   className={`cursor-pointer ${
//                     savedIds.includes(listing.id) ? "text-orange-500" : "text-gray-500"
//                   }`}
//                   onClick={() => handleSave(listing)}
//                 />
//               </div>
//               <p className="text-sm text-gray-700 mt-2">{listing.description}</p>
//               <div className="mt-4 flex items-center justify-between">
//                 <span className="text-lg font-bold text-gray-800">
//                   KSH {listing.price}/Month
//                 </span>
//                 <span className="text-gray-600 text-sm flex items-center">
//                   <FaMapMarkerAlt />
//                   {listing.location}
//                 </span>
//               </div>
//             </div>
//             <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
//               <span className="flex items-center">
//                 <FaBed />
//                 {listing.bedrooms || "N/A"} Bedrooms
//               </span>
//               <span className="flex items-center">
//                 <FaBath />
//                 {listing.bathrooms || "N/A"} Bathrooms
//               </span>
//               <span className="flex items-center">
//                 <FaToilet />
//                 {listing.toilets || "N/A"} Toilets
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { FaBed, FaBath, FaToilet, FaMapMarkerAlt } from "react-icons/fa";
import { MdBookmark } from "react-icons/md";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function LatestListed({ saveItem }) {
  const [listings, setListings] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "rentals"), (snapshot) => {
      const fetchedListings = snapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter(
          (listing) =>
            listing.images &&
            listing.type &&
            listing.price &&
            listing.location &&
            listing.bedrooms &&
            listing.bathrooms &&
            listing.toilets
        ); // Filter listings with all required fields

      console.log("Filtered Listings:", fetchedListings);
      setListings(fetchedListings);
      setLoading(false); // Stop loading after data is fetched
    });

    return () => unsubscribe();
  }, []);

  const handleSave = (item) => {
    if (!savedIds.includes(item.id)) {
      saveItem(item);
      setSavedIds((prev) => [...prev, item.id]);
    }
  };

  // Show a loading spinner/message while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading listings...</p>
      </div>
    );
  }

  // Show a fallback message if no valid listings are found
  if (listings.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>No valid listings available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-10">
      <h2 className="text-center text-2xl font-bold mb-8">
        Latest Listed Rentals
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden"
          >
            <img
              src={listing.images}
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                  {listing.type}
                </h3>
                <MdBookmark
                  className={`cursor-pointer ${
                    savedIds.includes(listing.id)
                      ? "text-orange-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleSave(listing)}
                />
              </div>
              <div>
                <p className="text-sm text-gray-700 mt-2 text-wrap">
                  {listing.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-800">
                    KSH {listing.price}/Month
                  </span>
                  <span className="text-gray-600 text-sm flex items-center">
                    <FaMapMarkerAlt />
                    {listing.location}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />
                {listing.bedrooms} Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />
                {listing.bathrooms} Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />
                {listing.toilets} Toilets
              </span>
            </div>
            <Link
              to={"/propertyDetailsPage"}
              state={{ listing }}
              className="text-[orange] block bg-[#470E0E] border-solid border-2  text-center py-2"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
