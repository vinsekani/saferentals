import React, { useState } from "react";
import UpdateProfile from "./UpdateProfile";
import UpdatePassword from "./UpdatePassword";
import UpdateProfilePicture from "./UpdateProfilePicture";
import { useNavigate } from "react-router-dom"; // For navigation after logout
import { getAuth, signOut } from "firebase/auth"; // Firebase signOut

export default function Profile() {
  const [activeModal, setActiveModal] = useState(null);
  const [profileDetails, setProfileDetails] = useState({
    name: "Vincent Sekani",
    email: "vinsekani@gmail.com",
    phone: "+254 701665262", // Add phone number here
    city: "Nairobi",
    street: "",
  });
  const [profileImage, setProfileImage] = useState(null); // State for profile image
  const navigate = useNavigate(); // To handle navigation after logout

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Navigate to the login page or any other desired page
        navigate("/signinpage");
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className="h-screen flex justify-center">
      <div className="border border-gray-300 rounded-lg shadow-lg p-8 w-full max-w-md h-[50%] mt-[5em]">
        <h1 className="text-center text-lg font-bold mb-4 text-gray-800">
          MY PROFILE
        </h1>
        <hr className="border-gray-300 mb-4" />
        <div className="flex flex-col items-center">
          <div
            className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden cursor-pointer"
            onClick={() => setActiveModal("updatePicture")}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4z"
                />
              </svg>
            )}
          </div>
        </div>
        <div className="text-gray-800">
          <p>
            <span className="font-semibold">Name:</span> {profileDetails.name}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {profileDetails.email}
          </p>
          <p>
            <span className="font-semibold">Phone Number:</span>{" "}
            {profileDetails.phone}
          </p>

          <p>
            <span className="font-semibold">City:</span> {profileDetails.city}
          </p>
          <p>
            <span className="font-semibold">Street:</span>{" "}
            {profileDetails.street}
          </p>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => setActiveModal("editProfile")}
            className="border border-red-500 text-red-500 py-2 px-4 rounded hover:bg-red-500 hover:text-white transition"
          >
            Edit Profile
          </button>
          <button
            onClick={() => setActiveModal("updatePassword")}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Update Password
          </button>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={logout} // Call the logout function
            className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600 transition"
          >
            Log out
          </button>
        </div>
      </div>

      {activeModal === "editProfile" && (
        <UpdateProfile
          onClose={() => setActiveModal(null)}
          profileDetails={profileDetails}
          setProfileDetails={setProfileDetails}
        />
      )}
      {activeModal === "updatePassword" && (
        <UpdatePassword onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "updatePicture" && (
        <UpdateProfilePicture
          onClose={() => setActiveModal(null)}
          setProfileImage={setProfileImage}
        />
      )}
    </div>
  );
}
