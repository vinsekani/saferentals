import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";



import React from "react";

export default function Register() {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState({});
  const navigate = useNavigate()


  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }


 function handleSignUp(event) {
    event.preventDefault();
    const errors = {};

    !formData.fullName || formData.fullName === ""
      ? (errors.fullName = true)
      : (errors.fullName = false);

    !formData.email || formData.email === ""
      ? (errors.email = true)
      : (errors.email = false);

    !formData.phoneNumber || formData.phoneNumber === ""
      ? (errors.phoneNumber = true)
      : (errors.phoneNumber = false);

    !formData.password || formData.password === ""
      ? (errors.password = true)
      : (errors.password = false);

    !formData.confirmPassword || formData.confirmPassword === ""
      ? (errors.confirmPassword = true)
      : (errors.confirmPassword = false);

    console.log(errors);

    setError(errors);

    if (
      !errors.fullName &&
      !errors.email &&
      !errors.phoneNumber &&
      !errors.password &&
      !errors.confirmPassword
    ) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          if (user) {
            navigate("/signinpage");
            const {password, confirmPassword, ...others} = formData;

            const otherData={...others, uid:user.uid}

            console.log(otherData)
            try {
              const docRef = addDoc(collection(db, "rentals"), otherData);
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
          }
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          // ..
        });

      console.log("Working after validation");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          REGISTER
        </h1>

        {error.fullName ||
        error.email ||
        error.phoneNumber ||
        error.password ||
        error.confirmPassword ? (
          <p className="text-[red] text-center">Please fill all the fields</p>
        ) : (
          <p></p>
        )}

        {error.password === error.confirmPassword}
        <form>
          
          <div className="mb-4">
            <label className="block font-semibold text-gray-600 mb-2">
              Full Name
            </label>
            <input
              value={formData.fullName && formData.fullName}
              name="fullName"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="Enter full name"
              className={`w-full border rounded-lg shadow-sm focus:ring p-3 ${
                error.fullName ? "border-red-500" : "border-[gray]"
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block  font-semibold text-gray-600 mb-2">
              Email
            </label>
            <input
            value={formData.email && formData.email}
              name="email"
              onChange={(e) => handleChange(e)}
              type="email"
              placeholder="Enter your email"
              className={`w-full border rounded-lg shadow-sm focus:ring p-3 ${
                error.email ? "border-[red]" : "border-[gray]"
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-600 mb-2">
              Phone no
            </label>
            <input
            value={formData.phoneNumber && formData.phoneNumber}
              name="phoneNumber"
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="+254 701665262"
              className={`w-full border rounded-lg shadow-sm focus:ring p-3 ${
                error.phoneNumber ? "border-red-500" : "border-[gray]"
              }`}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold text-gray-600 mb-2">
              Password
            </label>
            <input
            value={formData.password && formData.password}
              name="password"
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Enter password"
              className={`w-full border rounded-lg shadow-sm focus:ring p-3 ${
                error.password ? "border-red-500" : "border-[gray]"
              }`}
            />
          </div>
          <div className="mb-6">
            <label className="block font-semibold text-gray-600 mb-2">
              Confirm Password
            </label>
            <input
            value={formData.confirmPassword && formData.confirmPassword}
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="Confirm Password"
              className={`w-full border rounded-lg shadow-sm focus:ring p-3 ${
                error.confirmPassword ? "border-red-500" : "border-[gray]"
              }`}
            />
          </div>
          <button
            onClick={(event) => handleSignUp(event)}
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
