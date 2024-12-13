import { getAuth, updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { useState } from "react";

export default function UpdatePassword({ onClose }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) throw new Error("User not authenticated.");

      const credential = EmailAuthProvider.credential(user.email, currentPassword);

      // Reauthenticate the user
      await reauthenticateWithCredential(user, credential);

      // Update password
      await updatePassword(user, newPassword);

      setSuccess("Password updated successfully.");
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
          Update Password
        </h2>
        <form>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">{success}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Current Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
              placeholder="Enter current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">New Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Confirm New Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-black-200"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              onClick={handleUpdatePassword}
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
