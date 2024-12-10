import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

export default function Loginhome() {
  return (
    <>
      <div className="relative bg-center h-[30vh]">
        <div className="absolute inset-0 bg-[#C33723] "></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <div className="w-full max-w-4xl bg-white rounded-lg p-6 shadow-lg text-gray-800">
            <input
              type="text"
              placeholder="Enter county or town"
              className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option>All Types</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Condo</option>
              </select>

              <select className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Any</option>
                <option>1</option>
                <option>2</option>
                <option>3+</option>
              </select>

              <input
                type="number"
                placeholder="Min"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <input
                type="number"
                placeholder="Max"
                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <button className="mt-6 w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-all">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-2xl font-bold mb-8">
          Latest Listed Rentals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/ap1.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                  Lovely 2Bedroom Rental House
                </h3>
                <FaRegBookmark />
              </div>

              <p className="text-sm text-gray-700 mt-2">
                6 bedroom house for sale in Runda. A lovely 6-bedroom
                double-storey house on its own compound is available for sale in
                Runda.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 9,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />2 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />3 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />3 Toilets
              </span>
            </div>
          </div>

          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/ap1.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                  Lovely 2Bedroom Rental House
                </h3>
                <FaRegBookmark />
              </div>

              <p className="text-sm text-gray-700 mt-2">
                6 bedroom house for sale in Runda. A lovely 6-bedroom
                double-storey house on its own compound is available for sale in
                Runda.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 9,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />2 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />3 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />3 Toilets
              </span>
            </div>
          </div>

          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/ap1.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                  Lovely 2Bedroom Rental House
                </h3>
                <FaRegBookmark />
              </div>

              <p className="text-sm text-gray-700 mt-2">
                6 bedroom house for sale in Runda. A lovely 6-bedroom
                double-storey house on its own compound is available for sale in
                Runda.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 9,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />2 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />3 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />3 Toilets
              </span>
            </div>
          </div>

          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/ap1.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                  Lovely 2Bedroom Rental House
                </h3>
                <FaRegBookmark />
              </div>

              <p className="text-sm text-gray-700 mt-2">
                6 bedroom house for sale in Runda. A lovely 6-bedroom
                double-storey house on its own compound is available for sale in
                Runda.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 9,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />2 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />3 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />3 Toilets
              </span>
            </div>
          </div>

          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/ap1.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                  Lovely 2Bedroom Rental House
                </h3>
                <FaRegBookmark />
              </div>

              <p className="text-sm text-gray-700 mt-2">
                6 bedroom house for sale in Runda. A lovely 6-bedroom
                double-storey house on its own compound is available for sale in
                Runda.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 9,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />2 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />3 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />3 Toilets
              </span>
            </div>
          </div>

          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/ap1.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                  Lovely 2Bedroom Rental House
                </h3>
                <FaRegBookmark />
              </div>

              <p className="text-sm text-gray-700 mt-2">
                6 bedroom house for sale in Runda. A lovely 6-bedroom
                double-storey house on its own compound is available for sale in
                Runda.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 9,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />2 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />3 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />3 Toilets
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
