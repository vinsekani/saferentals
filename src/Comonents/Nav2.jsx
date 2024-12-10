import { FaBookmark } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Nav2() {
  return (
    <>
      <nav className="bg-[#4D0909] text-white py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src="src/assets/orange-saferentals-high-resolution-logo-transparent (1).png"
              alt="Logo"
              className="h-8 w-[150px]"
            />
          </div>

          <div>
            <p className="text-lg font-bold">SAFE SPACE, HAPPY FACE</p>
          </div>

          <div className="flex items-center space-x-6">
            <FaBookmark className="text-[20px]" />
            <FaFacebookMessenger className="text-[20px]" />
            <CgProfile className="text-[25px]" />

            <a
              href="#"
              className="bg-[#C33723] text-white font-bold py-2 px-4 rounded-md hover:bg-[#E0441F]"
            >
              + Add Listing
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
