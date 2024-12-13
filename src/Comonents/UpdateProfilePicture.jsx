import React, { useState } from "react";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

export default function UpdateProfilePicture({ onClose, setProfileImage }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError("Please select a valid image.");
      return;
    }

    const url = "https://api.cloudinary.com/v1_1/oroko/image/upload";
    const bodyData = new FormData();
    bodyData.append("file", file);
    bodyData.append("upload_preset", "profile");

    setUploading(true);
    setError("");

    try {
      const response = await fetch(url, {
        method: "POST",
        body: bodyData,
      });
      const data = await response.json();

      if (data.secure_url) {
        setProfileImage(data.secure_url); // Update profile picture in parent

        const auth = getAuth();
        const db = getFirestore();
        const user = auth.currentUser;

        if (user) {
          const userDoc = doc(db, "users", user.uid);
          await updateDoc(userDoc, { profilePicture: data.secure_url });
        }

        setSuccess("Profile picture updated successfully.");
        setTimeout(onClose, 2000); // Close modal after success
      } else {
        throw new Error("Image upload failed.");
      }
    } catch (err) {
      setError(err.message || "An error occurred while uploading the image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
          Update Profile Picture
        </h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-2">{success}</p>}
        <input
          type="file"
          onChange={handleImageUpload}
          className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md p-2"
        />
        {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={onClose}
            className="mr-4 border border-red-500 text-red-500 py-2 px-4 rounded hover:bg-red-500 hover:text-white transition"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleImageUpload}
            disabled={uploading}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
