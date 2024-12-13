import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="bg-[#C33723] text-white text-center py-6">
          <h2 className="text-lg font-bold">
            ARE YOU A LANDLORD? LIST YOUR RENTALS AT AN AFFORDABLE PRICE
          </h2>
          <Link to="/Registerpage">
            {" "}
            <button className="mt-4 px-6 py-2 border border-white text-white font-bold rounded hover:bg-white hover:text-[#C33723]">
              Register Now
            </button>
          </Link>
        </div>

        <div className="bg-[#4D0909] text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img
                src="src/assets/orange-saferentals-high-resolution-logo-transparent (1).png"
                alt="Logo"
                className="h-8 w-[150px]"
              />
              <p className="mt-4">FOLLOW US</p>
              <div className="flex space-x-4 mt-2">
                <a href="#">
                  <FaSquareYoutube className="h-6 w-6" />
                </a>
                <a href="#">
                  <FaFacebookSquare className="h-6 w-6" />
                </a>
                <a href="#">
                  <FaInstagramSquare className="h-6 w-6" />
                </a>
                <a href="#">
                  <FaSquareXTwitter className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">ABOUT US</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Billing Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">GET OUR APP</h3>
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-2">
                  <FaAppStoreIos className="h-6 w-6" />
                  <span>
                    Download On <strong>App Store</strong>
                  </span>
                </a>
                <a href="#" className="flex items-center space-x-2">
                  <FaGooglePlay className="h-6 w-6" />
                  <span>
                    Download On <strong>Play Store</strong>
                  </span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">SUPPORT</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Safe Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
