import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import { FaToilet } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdBookmark } from "react-icons/md";

export default function Latest() {
  return (
    <>
      <div className="bg-gray-100 py-10">
        <h2 className="text-center text-2xl font-bold mb-8">
          Latest Listed Rentals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
          
          <button>
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
                <MdBookmark />

              </div>

              <p className="text-sm text-gray-700 mt-2 text-left">
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

          </button>

          <button>
          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/ap2.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                Cozy Family Home                </h3>
                <MdBookmark />

              </div>

              <p className="text-sm text-gray-700 mt-2 text-left">
              This three-bedroom, two-bathroom house offers a bright open-plan living area, a modern kitchen, and a spacious backyard. Located in a quiet, family-friendly neighborhood, it’s close to schools, parks, and local shops. Perfect for those seeking comfort, convenience, and room to g
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 19,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Mombasa
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />9 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />8 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />8 Toilets
              </span>
            </div>
          </div>

          </button>

          <button>
          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/d2.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                Luxury Apartment
                </h3>
                <MdBookmark />

              </div>

              <p className="text-sm text-gray-700 mt-2 text-left">
              A stunning two-bedroom, two-bathroom apartment with floor-to-ceiling windows, an open-concept design, and high-end finishes. Enjoy breathtaking city views, a fully equipped modern kitchen, and exclusive access to amenities like a gym and rooftop lounge. Conveniently located near top restaurants and entertainment.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 10,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Narok
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />3 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />2 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />2 Toilets
              </span>
            </div>
          </div>

          </button>

          <button>
          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/h9.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                Charming Cottage                </h3>
                <MdBookmark />

              </div>

              <p className="text-sm text-gray-700 mt-2 text-left">
              This quaint two-bedroom cottage features a cozy fireplace, hardwood floors, and a sunlit kitchen. Surrounded by lush gardens and mature trees, it offers tranquility just minutes from local shops and cafes. Ideal for those seeking a peaceful retreat with a touch of charm.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 15,000/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Kisumu
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />3 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />4 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />3 Toilets
              </span>
            </div>
          </div>

          </button>

          <button>
          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/h8.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                Modern Townhouse
                </h3>
                <MdBookmark />

              </div>

              <p className="text-sm text-gray-700 mt-2 text-left">
              A sleek three-bedroom townhouse with a spacious open-plan living area, a private patio, and a two-car garage. Enjoy contemporary finishes, energy-efficient appliances, and proximity to vibrant shopping and dining districts. Perfect for professionals or families wanting style and convenience.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-800">
                  KSH 7,500/Month
                </span>
                <span className="text-gray-600 text-sm flex items-center">
                  <FaMapMarkerAlt />
                  Nairobi
                </span>
              </div>
            </div>
            <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
              <span className="flex items-center">
                <FaBed />1 Bedrooms
              </span>
              <span className="flex items-center">
                <FaBath />2 Bathrooms
              </span>
              <span className="flex items-center">
                <FaToilet />2 Toilets
              </span>
            </div>
          </div>

          </button>

          <button>
          <div className="border-double border-4 border-[#470E0E] rounded-lg bg-white shadow-md overflow-hidden">
            <img
              src="src/assets/h6.jpg"
              alt="Rental House"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between">
                <h3 className="text-red-600 font-semibold text-lg">
                Rustic Country Retreat                </h3>
                <MdBookmark />

              </div>

              <p className="text-sm text-gray-700 mt-2 text-left">
              Nestled on a sprawling acre, this four-bedroom home offers exposed beams, a stone fireplace, and a large wrap-around porch. The peaceful setting provides breathtaking views and room to relax, just a short drive from town. Perfect for anyone seeking a rural escape.
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

          </button>
        </div>
      </div>
    </>
  );
}
