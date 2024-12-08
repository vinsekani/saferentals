export default function Nav(){
    return(
        <>
        <nav class="bg-[#4D0909] text-white py-3">
  <div class="container mx-auto flex items-center justify-between">
 
    <div class="flex items-center space-x-4">

      <img src="src/assets/orange-saferentals-high-resolution-logo-transparent (1).png" alt="Logo" class="h-8 w-8" />

      <div>
        <h1 class="text-lg font-bold">SAFERENTALS</h1>
        <p class="text-sm">SAFE SPACE, HAPPY FACE</p>
      </div>
    </div>

   
    <div class="flex items-center space-x-6">
      <a href="#" class="text-white hover:underline">Sign in</a>
      <a href="#" class="text-white hover:underline">Register</a>
      <a href="#"
        class="bg-[#FF5733] text-white font-bold py-2 px-4 rounded-full hover:bg-[#E0441F]">
        + Add Listing
      </a>
    </div>
  </div>
</nav>

        </>
    )
}