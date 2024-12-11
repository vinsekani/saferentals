import { FaBed,FaBath,FaToilet,FaMapMarkerAlt } from "react-icons/fa";

import Profile from "./Profile";
import {Link} from "react-router-dom"
import { MdDeleteForever } from "react-icons/md";



export default function MyList() {
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-start justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-1/3 bg-white rounded-lg shadow-md p-6">
        <Profile />
      </div>

      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">MY LISTING</h1>

        <div className="flex flex-col gap-5">
          <div className=" relative border-double border-4 border-[#470E0E] rounded-lg shadow-md overflow-hidden group ">
            <div className="relative lg:flex gap-[10px]">
              <img
                src="src/assets/ap3.jpg"
                alt="Lovely 2Bedroom Rental House"
                className="w-full h-48 object-cover"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  Lovely 2Bedroom Rental House
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  6 bedroom house for sale in Runda. A lovely 6-bedroom
                  double-story house on its own compound is available for sale
                  in Runda. Features include:
                </p>
                <p className="text-lg font-bold text-red-600 mb-3">
                  KSH 9,000/Month
                </p>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>

            <div className="">
              <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <FaBed /> 2 Bedrooms
                </span>
                <span className="flex items-center gap-2">
                  <FaBath /> 3 Bathrooms
                </span>
                <span className="flex items-center gap-2">
                  <FaToilet /> 3 Toilets
                </span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-end space-x-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-14">
              <MdDeleteForever className="text-[30px] text-[red]" />
            </div>
          </div>

          <div className=" relative border-double border-4 border-[#470E0E] rounded-lg shadow-md overflow-hidden group ">
            <div className="relative lg:flex gap-[10px]">
              <img
                src="src/assets/ap3.jpg"
                alt="Lovely 2Bedroom Rental House"
                className="w-full h-48 object-cover"
              />
              <div>
                <h2 className="text-lg font-bold text-gray-800 mb-1">
                  Lovely 2Bedroom Rental House
                </h2>
                <p className="text-sm text-gray-600 mb-3">
                  6 bedroom house for sale in Runda. A lovely 6-bedroom
                  double-story house on its own compound is available for sale
                  in Runda. Features include:
                </p>
                <p className="text-lg font-bold text-red-600 mb-3">
                  KSH 9,000/Month
                </p>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>

            <div className="">
              <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <FaBed /> 2 Bedrooms
                </span>
                <span className="flex items-center gap-2">
                  <FaBath /> 3 Bathrooms
                </span>
                <span className="flex items-center gap-2">
                  <FaToilet /> 3 Toilets
                </span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-end space-x-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 top-14">
              <MdDeleteForever className="text-[30px] text-[red]" />
            </div>
          </div>
        </div>
        <div className="items-center text-center">
        <Link to="/Listingpage"> <button className="bg-[#C33723] text-white font-bold py-2 px-4 rounded-md hover:bg-[#E0441F] mt-7">
                + Add Listing
              </button></Link>
        </div>
      </div>
    </div>
  );
}
