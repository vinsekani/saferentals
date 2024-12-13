import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export default function UpdateProfile({
  onClose,
  profileDetails,
  setProfileDetails,
}) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdateProfile = async () => {
    try {
      const auth = getAuth();
      const db = getFirestore();
      const user = auth.currentUser;

      if (!user) {
        throw new Error("User not authenticated.");
      }

      // Update Firestore user document
      const userDoc = doc(db, "users", user.uid);
      await updateDoc(userDoc, {
        name: profileDetails.name,
        email: profileDetails.email,
        city: profileDetails.city,
        street: profileDetails.street,
      });

      // Update Firebase Authentication profile
      await updateProfile(user, { displayName: profileDetails.name });

      setSuccess("Profile updated successfully.");
      setTimeout(onClose, 2000); // Close modal after success message
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
          Update Profile
        </h2>
        <form>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
              value={profileDetails.name}
              onChange={(e) =>
                setProfileDetails((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
              value={profileDetails.email}
              onChange={(e) =>
                setProfileDetails((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
              value={profileDetails.phone}
              onChange={(e) =>
                setProfileDetails((prev) => ({
                  ...prev,
                  phone: e.target.value,
                }))
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">City</label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
              value={profileDetails.city}
              onChange={(e) =>
                setProfileDetails((prev) => ({ ...prev, city: e.target.value }))
              }
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Street</label>
            <input
              type="text"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
              value={profileDetails.street}
              onChange={(e) =>
                setProfileDetails((prev) => ({
                  ...prev,
                  street: e.target.value,
                }))
              }
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 border border-red-500 text-red-500 py-2 px-4 rounded hover:bg-red-500 hover:text-white transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleUpdateProfile}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
