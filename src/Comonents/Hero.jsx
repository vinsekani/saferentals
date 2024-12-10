export default function () {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[50vh]"
        style={{ backgroundImage: `url('src/assets/street1.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-4xl font-bold mb-6">Find Your New Home</h1>

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
    </>
  );
}
