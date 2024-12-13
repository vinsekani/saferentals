import { FaBed, FaBath, FaToilet, FaMapMarkerAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function Save({ savedItems,deleteItem}) {
  if (!savedItems || !Array.isArray(savedItems)) {
    return <p>No saved items available.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-start justify-center p-8 space-y-8 md:space-y-0 md:space-x-8">
      <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-center text-2xl font-bold mb-8">Saved Rentals</h2>
        <div className="
        ">
          {savedItems.map((item) => (
            <div
              key={item.id}
              className=" relative border-double border-4 border-[#470E0E] rounded-lg shadow-md overflow-hidden group "
            >
              <div className="relative lg:flex gap-[10px]">
                <img
                  src={item.images[0]}
                  alt="Rental House"
                  className="w-full h-48 object-cover"
                />
                            {console.log(item)}

                <div className="p-4">
                <div className="flex justify-between items-center">
                <h3 className="text-red-600 font-semibold text-lg">
                  {item.type}
                </h3>
                <MdDelete
                  className="text-red-500 cursor-pointer text-[20px]"
                  onClick={() => deleteItem(item.id)}
                />
              </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>

                  <span className="text-lg font-bold text-red-600 mb-3">
                    {item.price}
                  </span>
                  <span className="text-gray-600 text-sm flex items-center">
                    <FaMapMarkerAlt />
                    {item.location}
                  </span>
                </div>
              </div>
              <div className="bg-[#470E0E] text-white text-sm p-3 flex justify-between items-center">
                <span className="flex items-center">
                  <FaBed /> {item.bedrooms}
                </span>
                <span className="flex items-center">
                  <FaBath /> {item.bathrooms}
                </span>
                <span className="flex items-center">
                  <FaToilet /> {item.toilets}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
