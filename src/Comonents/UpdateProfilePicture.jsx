export default function UpdateProfilePicture({ onClose }) {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
          Update Profile Picture
        </h2>
        <form>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">Image</label>
            <input
              type="file"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 border border-red-500 text-red-500 py-2 px-4 rounded hover:bg-red-500 hover:text-white transition"
            >
              Cancel
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
