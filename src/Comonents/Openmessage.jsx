import { CgProfile } from "react-icons/cg";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Closedmessage() {
  return (
    <>
      <div className="h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <div className="lg:w-1/3 w-screen bg-white shadow-lg border-r">
          <div className="p-4 border-b flex items-center">
            <button className="text-lg font-bold text-gray-800 flex items-center">
              <IoMdArrowRoundBack className="mr-2" />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">MY MESSAGES</h1>
          </div>

          {/* Chat List */}
          <div className="divide-y divide-gray-200">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`p-4 flex items-center cursor-pointer ${
                  index === 0 ? "bg-gray-100" : "hover:bg-gray-100"
                }`}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <CgProfile className="text-gray-600" />
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-800">
                    Dallas Apartment
                  </p>
                  <p className="text-sm text-gray-600">
                    Lovely 2Bedroom Rental House
                  </p>
                  <p className="text-sm text-gray-400">
                    Is the house still vacant
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="hidden flex-grow lg:flex flex-col items-center justify-between bg-gray-50">
          <div className="flex flex-col items-center justify-center">
       
            <p className="mt-4 text-gray-600">
              Select a chat to view conversation
            </p>
          </div>
          <p className="text-sm text-gray-500 my-4">
            Do not pay deposit or rent in advance
          </p>
          <div className="w-full px-4">
            <div className="flex items-center bg-white border rounded-lg p-4 shadow-md">
              <input
                type="text"
                placeholder="Write your message here..."
                className="flex-grow px-2 py-1 text-sm border-none focus:outline-none"
              />
              <button className="bg-red-500 text-white px-4 py-1 rounded-lg">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
