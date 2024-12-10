import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function Mysave() {
  return (
    <>
      {/* <div className="relative border rounded-lg bg-white shadow-md overflow-hidden group">
  <img
    src="src/assets/ap2.jpg"
    alt="Rental House"
    className="w-full h-48 object-cover"
  />


  <div className="p-4">
    <h3 className="text-red-600 font-semibold text-lg">Lovely 2Bedroom Rental House</h3>
    <p className="text-sm text-gray-700 mt-2">
      6 bedroom house for sale in Runda. A lovely 6-bedroom double-storey house on its own compound is available for sale in Runda.
    </p>
    <div className="mt-4 flex items-center justify-between">
      <span className="text-lg font-bold text-gray-800">KSH 9,000/Month</span>
      <span className="text-gray-600 text-sm flex items-center">
        <svg
          className="w-4 h-4 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 16l4-4-4-4m4 4H4m8 4l4-4-4-4"
          />
        </svg>
        Nairobi
      </span>
    </div>
  </div>


  <div
    className="absolute inset-0 bg-opacity-90 bg-red-700 text-white flex flex-col justify-center items-center space-y-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <button className="bg-white text-red-700 px-4 py-2 rounded-md shadow hover:bg-gray-200">
      Chat
    </button>
    <button className="bg-red-600 text-white px-4 py-2 rounded-md shadow hover:bg-red-500">
      Show Contact
    </button>
  </div>


  <div
    className="bg-red-700 text-white text-sm p-3 flex justify-between items-center"
  >
    <span><i className="fas fa-bed mr-2"></i>2 Bedrooms</span>
    <span><i className="fas fa-bath mr-2"></i>3 Bathrooms</span>
    <span><i className="fas fa-toilet mr-2"></i>3 Toilets</span>
  </div>
</div> */}

      <div className="max-w-4xl mx-auto p-4">
        <div className="space-y-6 bg-[white] p-10 rounded-md">
          <div className="text-center mb-6">
            <h1 className="text-xl font-semibold text-gray-800 border-b-2 pb-2">
              MY SAVED
            </h1>
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
              <div className="flex flex-col space-y-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded shadow">
                  Chat
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded shadow">
                  Show Contact
                </button>
              </div>
              <MdDeleteForever className="text-[30px] text-[red]" />
            </div>
          </div>

          <div className="relative border-double border-4 border-[#470E0E] rounded-lg shadow-md overflow-hidden group">
            <div className="relative lg:flex gap-[10px]">
              <img
                src="src/assets/h3.jpg"
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
              <div className="flex flex-col space-y-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded shadow">
                  Chat
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded shadow">
                  Show Contact
                </button>
              </div>
              <MdDeleteForever className="text-[30px] text-[red]" />
            </div>
          </div>

          <div className="relative border-double border-4 border-[#470E0E] rounded-lg shadow-md overflow-hidden group">
            <div className="relative lg:flex gap-[10px]">
              <img
                src="src/assets/h4.jpg"
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
              <div className="flex flex-col space-y-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded shadow">
                  Chat
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded shadow">
                  Show Contact
                </button>
              </div>
              <MdDeleteForever className="text-[30px] text-[red]" />
            </div>
          </div>

          <div className="relative border-double border-4 border-[#470E0E] rounded-lg shadow-md overflow-hidden group">
            <div className="relative lg:flex gap-[10px]">
              <img
                src="src/assets/h5.jpg"
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
              <div className="flex flex-col space-y-2">
                <button className="bg-red-500 text-white px-4 py-2 rounded shadow">
                  Chat
                </button>
                <button className="bg-gray-800 text-white px-4 py-2 rounded shadow">
                  Show Contact
                </button>
              </div>
              <MdDeleteForever className="text-[30px] text-[red]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
