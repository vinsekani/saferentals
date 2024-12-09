import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

export default function Loginhome(){
    return(
        <>
        <div class="relative bg-center h-[30vh]"   >

<div class="absolute inset-0 bg-[#C33723] "></div>

<div class="relative z-10 flex flex-col items-center justify-center h-full text-white">

  <div class="w-full max-w-4xl bg-white rounded-lg p-6 shadow-lg text-gray-800">
    <input 
      type="text" 
      placeholder="Enter county or town" 
      class="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
    />
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">

      <select class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
        <option>All Types</option>
        <option>Apartment</option>
        <option>House</option>
        <option>Condo</option>
      </select>

      <select class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
        <option>Any</option>
        <option>1</option>
        <option>2</option>
        <option>3+</option>
      </select>

      <input 
        type="number" 
        placeholder="Min" 
        class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <input 
        type="number" 
        placeholder="Max" 
        class="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>

    <button 
      class="mt-6 w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-all">
      Search
    </button>
  </div>
</div>
</div>

<div class="bg-gray-100 py-10">
  <h2 class="text-center text-2xl font-bold mb-8">Latest Listed Rentals</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">

    <div class="border rounded-lg bg-white shadow-md overflow-hidden">
      <img
        src="src/assets/ap1.jpg"
        alt="Rental House"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <div class="flex justify-between">
        <h3 class="text-red-600 font-semibold text-lg">Lovely 2Bedroom Rental House</h3>
        <FaRegBookmark />
        </div>

        <p class="text-sm text-gray-700 mt-2">
          6 bedroom house for sale in Runda. A lovely 6-bedroom double-storey house on its own compound is available for sale in Runda.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-lg font-bold text-gray-800">KSH 9,000/Month</span>
          <span class="text-gray-600 text-sm flex items-center">
<FaMapMarkerAlt />
            Nairobi
          </span>
        </div>
      </div>
      <div class="bg-red-700 text-white text-sm p-3 flex justify-between items-center">
        <span class="flex items-center"><FaBed />
        2 Bedrooms</span>
        <span class="flex items-center"><FaBath />
3 Bathrooms</span>
        <span class="flex items-center"><FaToilet />
3 Toilets</span>
      </div>
    </div>

    <div class="border rounded-lg bg-white shadow-md overflow-hidden">
      <img
        src="src/assets/ap1.jpg"
        alt="Rental House"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <div class="flex justify-between">
        <h3 class="text-red-600 font-semibold text-lg">Lovely 2Bedroom Rental House</h3>
        <FaRegBookmark />
        </div>

        <p class="text-sm text-gray-700 mt-2">
          6 bedroom house for sale in Runda. A lovely 6-bedroom double-storey house on its own compound is available for sale in Runda.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-lg font-bold text-gray-800">KSH 9,000/Month</span>
          <span class="text-gray-600 text-sm flex items-center">
<FaMapMarkerAlt />
            Nairobi
          </span>
        </div>
      </div>
      <div class="bg-red-700 text-white text-sm p-3 flex justify-between items-center">
        <span class="flex items-center"><FaBed />
        2 Bedrooms</span>
        <span class="flex items-center"><FaBath />
3 Bathrooms</span>
        <span class="flex items-center"><FaToilet />
3 Toilets</span>
      </div>
    </div>

    <div class="border rounded-lg bg-white shadow-md overflow-hidden">
      <img
        src="src/assets/ap1.jpg"
        alt="Rental House"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <div class="flex justify-between">
        <h3 class="text-red-600 font-semibold text-lg">Lovely 2Bedroom Rental House</h3>
        <FaRegBookmark />
        </div>

        <p class="text-sm text-gray-700 mt-2">
          6 bedroom house for sale in Runda. A lovely 6-bedroom double-storey house on its own compound is available for sale in Runda.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-lg font-bold text-gray-800">KSH 9,000/Month</span>
          <span class="text-gray-600 text-sm flex items-center">
<FaMapMarkerAlt />
            Nairobi
          </span>
        </div>
      </div>
      <div class="bg-red-700 text-white text-sm p-3 flex justify-between items-center">
        <span class="flex items-center"><FaBed />
        2 Bedrooms</span>
        <span class="flex items-center"><FaBath />
3 Bathrooms</span>
        <span class="flex items-center"><FaToilet />
3 Toilets</span>
      </div>
    </div>


        <div class="border rounded-lg bg-white shadow-md overflow-hidden">
      <img
        src="src/assets/ap1.jpg"
        alt="Rental House"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <div class="flex justify-between">
        <h3 class="text-red-600 font-semibold text-lg">Lovely 2Bedroom Rental House</h3>
        <FaRegBookmark />
        </div>

        <p class="text-sm text-gray-700 mt-2">
          6 bedroom house for sale in Runda. A lovely 6-bedroom double-storey house on its own compound is available for sale in Runda.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-lg font-bold text-gray-800">KSH 9,000/Month</span>
          <span class="text-gray-600 text-sm flex items-center">
<FaMapMarkerAlt />
            Nairobi
          </span>
        </div>
      </div>
      <div class="bg-red-700 text-white text-sm p-3 flex justify-between items-center">
        <span class="flex items-center"><FaBed />
        2 Bedrooms</span>
        <span class="flex items-center"><FaBath />
3 Bathrooms</span>
        <span class="flex items-center"><FaToilet />
3 Toilets</span>
      </div>
    </div>


        <div class="border rounded-lg bg-white shadow-md overflow-hidden">
      <img
        src="src/assets/ap1.jpg"
        alt="Rental House"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <div class="flex justify-between">
        <h3 class="text-red-600 font-semibold text-lg">Lovely 2Bedroom Rental House</h3>
        <FaRegBookmark />
        </div>

        <p class="text-sm text-gray-700 mt-2">
          6 bedroom house for sale in Runda. A lovely 6-bedroom double-storey house on its own compound is available for sale in Runda.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-lg font-bold text-gray-800">KSH 9,000/Month</span>
          <span class="text-gray-600 text-sm flex items-center">
<FaMapMarkerAlt />
            Nairobi
          </span>
        </div>
      </div>
      <div class="bg-red-700 text-white text-sm p-3 flex justify-between items-center">
        <span class="flex items-center"><FaBed />
        2 Bedrooms</span>
        <span class="flex items-center"><FaBath />
3 Bathrooms</span>
        <span class="flex items-center"><FaToilet />
3 Toilets</span>
      </div>
    </div>


            <div class="border rounded-lg bg-white shadow-md overflow-hidden">
      <img
        src="src/assets/ap1.jpg"
        alt="Rental House"
        class="w-full h-48 object-cover"
      />
      <div class="p-4">
        <div class="flex justify-between">
        <h3 class="text-red-600 font-semibold text-lg">Lovely 2Bedroom Rental House</h3>
        <FaRegBookmark />
        </div>

        <p class="text-sm text-gray-700 mt-2">
          6 bedroom house for sale in Runda. A lovely 6-bedroom double-storey house on its own compound is available for sale in Runda.
        </p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-lg font-bold text-gray-800">KSH 9,000/Month</span>
          <span class="text-gray-600 text-sm flex items-center">
<FaMapMarkerAlt />
            Nairobi
          </span>
        </div>
      </div>
      <div class="bg-red-700 text-white text-sm p-3 flex justify-between items-center">
        <span class="flex items-center"><FaBed />
        2 Bedrooms</span>
        <span class="flex items-center"><FaBath />
3 Bathrooms</span>
        <span class="flex items-center"><FaToilet />
3 Toilets</span>
      </div>
    </div>
    
  </div>
</div>


        </>
    )
}