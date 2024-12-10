import React from "react";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          SIGN IN
        </h1>
        <form>
          <div className="mb-4">
            <label className="block font-semibold text-gray-600 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200 focus:border-red-400 p-3"
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold text-gray-600 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-red-200 focus:border-red-400 p-3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
