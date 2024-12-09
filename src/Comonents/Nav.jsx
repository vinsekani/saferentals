export default function Nav(){
    return(
        <>
        <nav class="bg-[#4D0909] text-white py-3">
  <div class="container mx-auto flex items-center justify-between">
 
    <div class="flex items-center space-x-4">

      <img src="src/assets/orange-saferentals-high-resolution-logo-transparent (1).png" alt="Logo" class="h-8 w-[150px]" />

    </div>

    <div>
        <p class="text-lg font-bold">SAFE SPACE, HAPPY FACE</p>
      </div>

   
    <div class="flex items-center space-x-6">
      <a href="#" class="text-white hover:underline">Sign in</a>
      <a href="#" class="text-white hover:underline">Register</a>
      <a href="#"
        class="bg-[#C33723] text-white font-bold py-2 px-4 rounded-md hover:bg-[#E0441F]">
        + Add Listing
      </a>
    </div>
  </div>
</nav>

        </>
    )
}