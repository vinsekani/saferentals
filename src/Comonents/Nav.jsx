import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className="bg-[#4D0909] text-white py-3">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
           <Link to="/"><img
              src="src/assets/orange-saferentals-high-resolution-logo-transparent (1).png"
              alt="Logo"
              className="h-8 w-[150px]"
            /></Link>
          </div>

          <div>
            <p className="text-lg font-bold">SAFE SPACE, HAPPY FACE</p>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/SignInPage">
              {" "}
              <button className="hover:underline">Sign In</button>
            </Link>
            <Link to="/Registerpage">
              <button className="hover:underline">Register</button>
            </Link>

             <Link to="/registerpage"> <button className="bg-[#C33723] text-white font-bold py-2 px-4 rounded-md hover:bg-[#E0441F]">
                + Add Listing
              </button></Link>
          </div>
        </div>
      </nav>
    </>
  );
}
