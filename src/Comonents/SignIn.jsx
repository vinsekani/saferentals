import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [formData, setFormData] = useState([]);
  const [error, setError] = useState({});
  const navigate = useNavigate()


  function handleChange(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleLogin(event) {
    event.preventDefault()
    const errors = {};

    !formData.email || formData.email === ""
      ? (errors.email = true)
      : (errors.email = false);

    !formData.password || formData.password === ""
      ? (errors.password = true)
      : (errors.password = false);

    console.log(errors);

    setError(errors);

    if (!errors.email && !errors.password) {
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            navigate("/loginhome");
          }
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
    }
  }


  

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-bold text-gray-800 mb-4">
          SIGN IN
        </h1>

        {error.email || error.password ? (
            <p className="text-[red] text-center">Please fill all the fields</p>
          ) : (
            <p></p>
          )}
        <form>
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
          <div className="mb-6">
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
          <button
          onClick={(event)=>handleLogin(event)}
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
