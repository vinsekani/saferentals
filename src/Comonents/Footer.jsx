import { FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";







export default function Footer(){
    return(
        <>
        <footer>
  <div class="bg-[#C33723] text-white text-center py-6">
    <h2 class="text-lg font-bold">ARE YOU A LANDLORD? LIST YOUR RENTALS AT AN AFFORDABLE PRICE</h2>
    <button class="mt-4 px-6 py-2 border border-white text-white font-bold rounded hover:bg-white hover:text-[#C33723]">
      Register Now
    </button>
  </div>


  <div class="bg-[#4D0909] text-white py-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

      <div>
      <img src="src/assets/orange-saferentals-high-resolution-logo-transparent (1).png" alt="Logo" class="h-8 w-[150px]" />
        <p class="mt-4">FOLLOW US</p>
        <div class="flex space-x-4 mt-2">
          <a href="#"><FaSquareYoutube class="h-6 w-6" />
           </a>
          <a href="#"><FaFacebookSquare class="h-6 w-6"/>
          </a>
          <a href="#"><FaInstagramSquare class="h-6 w-6"/>
          </a>
          <a href="#"><FaSquareXTwitter class="h-6 w-6"/>
          </a>
        </div>
      </div>


      <div>
        <h3 class="text-lg font-bold mb-4">ABOUT US</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Billing Policy</a></li>
        </ul>
      </div>

   
      <div>
        <h3 class="text-lg font-bold mb-4">GET OUR APP</h3>
        <div class="space-y-4">
          <a href="#" class="flex items-center space-x-2">
          <FaAppStoreIos class="h-6 w-6"/>
            <span>Download On <strong>App Store</strong></span>
          </a>
          <a href="#" class="flex items-center space-x-2">
          <FaGooglePlay class="h-6 w-6"/>
            <span>Download On <strong>Play Store</strong></span>
          </a>
        </div>
      </div>


      <div>
        <h3 class="text-lg font-bold mb-4">SUPPORT</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Safe Tips</a></li>
          <li><a href="#" class="hover:underline">Contact Us</a></li>
          <li><a href="#" class="hover:underline">FAQ</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </>
    )
}