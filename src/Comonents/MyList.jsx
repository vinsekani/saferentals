// import { FaBed, FaBath, FaToilet, FaMapMarkerAlt } from "react-icons/fa";
// import Profile from "./Profile";
// import { Link } from "react-router-dom";
// import { MdDeleteForever } from "react-icons/md";
// import { MdBookmark } from "react-icons/md";
// import { useEffect, useState } from "react";
// import { db } from "../firebase";
// import { collection, onSnapshot } from "firebase/firestore";

// export default function MyList() {
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
//     <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-start justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
//       <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
//         <Profile />
//       </div>

//       <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">MY LISTING</h1>

//         <div className="flex flex-col gap-5">
//           {listings.map((listing) => (
//             <div
//               key={listing.id}
//               className=" relative border-double border-4 border-[#470E0E] rounded-lg shadow-md overflow-hidden group "
//             >
//               <div className="relative lg:flex gap-[10px]">
//                 <img
//                   src={listing.images}
//                   alt="Lovely 2Bedroom Rental House"
//                   className="w-full h-48 object-cover"
//                 />
//                 <div>
//                   <h2 className="text-lg font-bold text-gray-800 mb-1">
//                     {listing.type}
//                   </h2>
//                   <p className="text-sm text-gray-600 mb-3">
//                     {listing.description}
//                   </p>
//                   <p className="text-lg font-bold text-red-600 mb-3">
//                     KSH {listing.price}/Month
//                   </p>
//                   <span className="text-gray-600 text-sm flex items-center">
//                     <FaMapMarkerAlt />
//                     {listing.location}
//                   </span>
//                 </div>
//               </div>

//               <div className="">
//                 <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
//                   <span className="flex items-center gap-2">
//                     <FaBed /> {listing.bedrooms || "N/A"} Bedrooms
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <FaBath /> {listing.bathrooms || "N/A"} Bathrooms
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <FaToilet /> {listing.toilets || "N/A"} Toilets
//                   </span>
//                 </div>
//               </div>

//               <div className="absolute inset-0 flex items-center justify-end space-x-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-14">
//                 <MdDeleteForever className="text-[30px] text-[red]" />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="items-center text-center">
//           <Link to="/Listingpage">
//             {" "}
//             <button className="bg-[#C33723] text-white font-bold py-2 px-4 rounded-md hover:bg-[#E0441F] mt-7">
//               + Add Listing
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }



import { FaBed, FaBath, FaToilet, FaMapMarkerAlt } from "react-icons/fa";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function MyList() {
  const [listings, setListings] = useState([]);
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
            listing.description &&
            listing.price &&
            listing.location &&
            listing.bedrooms &&
            listing.bathrooms &&
            listing.toilets
        ); // Only include listings with all required fields
      setListings(fetchedListings);
      setLoading(false); // Stop loading when data is fetched
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-start justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
          <Profile />
        </div>
        <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">MY LISTING</h1>
          <p className="text-center text-gray-600">Loading listings...</p>
          <div className="items-center text-center mt-4">
            <Link to="/Listingpage">
              <button className="bg-[#C33723] text-white font-bold py-2 px-4 rounded-md hover:bg-[#E0441F]">
                + Add Listing
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-start justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
        <Profile />
      </div>

      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">MY LISTING</h1>

        {listings.length === 0 ? (
          <p className="text-center text-gray-600">
            No listings available at the moment.
          </p>
        ) : (
          <div className="flex flex-col gap-5">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="relative border-double border-4 border-[#470E0E] rounded-lg shadow-md overflow-hidden group"
              >
                <div className="relative lg:flex gap-[10px]">
                  <img
                    src={listing.images}
                    alt="Lovely 2Bedroom Rental House"
                    className="w-full h-48 object-cover"
                  />
                  <div>
                    <h2 className="text-lg font-bold text-gray-800 mb-1">
                      {listing.type}
                    </h2>
                    <p className="text-sm text-gray-600 mb-3">
                      {listing.description}
                    </p>
                    <p className="text-lg font-bold text-red-600 mb-3">
                      KSH {listing.price}/Month
                    </p>
                    <span className="text-gray-600 text-sm flex items-center">
                      <FaMapMarkerAlt />
                      {listing.location}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
                    <span className="flex items-center gap-2">
                      <FaBed /> {listing.bedrooms} Bedrooms
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBath /> {listing.bathrooms} Bathrooms
                    </span>
                    <span className="flex items-center gap-2">
                      <FaToilet /> {listing.toilets} Toilets
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-end space-x-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-14">
                  <MdDeleteForever className="text-[30px] text-[red]" />
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="items-center text-center mt-4">
          <Link to="/Listingpage">
            <button className="bg-[#C33723] text-white font-bold py-2 px-4 rounded-md hover:bg-[#E0441F]">
              + Add Listing
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
