import { CgProfile } from "react-icons/cg";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Closedmessage() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        <div className="lg:w-1/3 w-screen bg-white shadow-lg border-r">
          <div className="p-4 border-b">
            <button className="text-lg font-bold text-gray-800">
              <span className="material-icons">
                <IoMdArrowRoundBack />
              </span>
            </button>
            <h1 className="text-lg font-semibold text-gray-800 mt-2">
              MY MESSAGES
            </h1>
          </div>

          <div className="divide-y divide-gray-200">
            <div className="p-4 flex items-center cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="material-icons text-gray-600">
                    <CgProfile />
                  </span>
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

            <div className="p-4 flex items-center cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="material-icons text-gray-600">
                    <CgProfile />
                  </span>
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
            <div className="p-4 flex items-center cursor-pointer hover:bg-gray-100">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="material-icons text-gray-600">
                    <CgProfile />
                  </span>
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
          </div>
        </div>

        <div className="hidden  flex-grow lg:flex flex-col items-center justify-center bg-gray-50">
          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center">
            <img
              src="src/assets/user-talking-with-speech-bubble.png"
              alt="Profile"
              className=" w-14"
            />
          </div>
          <p className="mt-4 text-gray-600">
            Select a chat to view conversation
          </p>
        </div>
      </div>
    </>
  );
}
