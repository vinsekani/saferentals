export default function Footer(){
    return(
        <>
        <footer>
  <div class="bg-[#FF5733] text-white text-center py-6">
    <h2 class="text-lg font-bold">ARE YOU A LANDLORD? LIST YOUR RENTALS AT AN AFFORDABLE PRICE</h2>
    <button class="mt-4 px-6 py-2 border border-white text-white font-bold rounded hover:bg-white hover:text-[#FF5733]">
      Register Now
    </button>
  </div>


  <div class="bg-[#4D0909] text-white py-8">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

      <div>
        <img src="logo.png" alt="Logo" class="h-8 w-8 mb-4" />
        <h1 class="text-lg font-bold">SAFERENTALS</h1>
        <p class="mt-4">FOLLOW US</p>
        <div class="flex space-x-4 mt-2">
          <a href="#"><img src="youtube-icon.png" alt="YouTube" class="h-6 w-6" /></a>
          <a href="#"><img src="facebook-icon.png" alt="Facebook" class="h-6 w-6" /></a>
          <a href="#"><img src="instagram-icon.png" alt="Instagram" class="h-6 w-6" /></a>
          <a href="#"><img src="twitter-icon.png" alt="Twitter" class="h-6 w-6" /></a>
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
            <img src="apple-icon.png" alt="App Store" class="h-6 w-6" />
            <span>Download On <strong>App Store</strong></span>
          </a>
          <a href="#" class="flex items-center space-x-2">
            <img src="google-play-icon.png" alt="Play Store" class="h-6 w-6" />
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