import React, { useState } from "react";
import Profile from "./Profile";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function ListingForm() {
  const [selectedPlan, setSelectedPlan] = useState("month");
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    type: "",
    location: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    toilets: "",
    description: "",
    features: [],
    images: [],
    paymentPlan: "month",
  });
  const [errors, setErrors] = useState({});
  const [imagePreviews, setImagePreviews] = useState([]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.type) newErrors.type = true;
    if (!formData.location) newErrors.location = true;
    if (!formData.bedrooms) newErrors.bedrooms = true;
    if (!formData.bathrooms) newErrors.bathrooms = true;
    if (!formData.price) newErrors.price = true;
    if (!formData.toilets) newErrors.toilets = true;
    if (!formData.description) newErrors.description = true;
    if (formData.images.length === 0) newErrors.images = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 

  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedFeatures = checked
          ? [...prev.features, value]
          : prev.features.filter((feature) => feature !== value);
        return { ...prev, features: updatedFeatures };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  function handleImageUpload(e) {
    const files = Array.from(e.target.files); 
    
    const url = "https://api.cloudinary.com/v1_1/oroko/image/upload";
  

    const fileUrls = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...fileUrls]);
  

    const uploadPromises = files.map((file) => {
      const bodyData = new FormData();
      bodyData.append("file", file);
      bodyData.append("upload_preset", "rentals");
  
      return fetch(url, { method: "POST", body: bodyData })
        .then((res) => res.json())
        .then((data) => data.secure_url) 
        
        .catch((err) => {
          console.error("Error uploading image:", err);
          return null; 
          
        });
    });
  

    Promise.all(uploadPromises).then((uploadedUrls) => {
      const validUrls = uploadedUrls.filter((url) => url !== null); 
      
      setFormData((prev) => ({
        ...prev,
        images: [...(prev.images || []), ...validUrls], 
        
      }));
      console.log("Uploaded image URLs:", validUrls);
    });
  }
  



  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {

      return;
    }

    try {
      console.log("Submitting data:", formData); 
      navigate("/MyListPage")
      const docRef = await addDoc(collection(db, "rentals"), {
        ...formData, 
        
      });
      
      console.log("Document written with ID: ", docRef.id);
      alert("Listing submitted successfully!");
      setFormData({
        type: "",
        location: "",
        bedrooms: "",
        bathrooms: "",
        price: "",
        toilets: "",
        description: "",
        features: [],
        images: [],
        paymentPlan: "month",
      });
      setImagePreviews([]);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Failed to submit. Please try again.");
    }
  };


  

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Listing</h1>
        

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold text-gray-600 mb-2">Type</label>
            <div className="flex items-center space-x-4">
              {["Apartment", "Bungalow", "Maisonette"].map((type) => (
                <label key={type} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    onChange={handleChange}
                    className={`form-radio ${
                      errors.type ? "border-2 border-red-500" : ""
                    }`}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-600 mb-2">Location</label>
            <input
              onChange={handleChange}
              name="location"
              type="text"
              placeholder="Type Your Location"
              className={`w-full border rounded-lg p-3 ${
                errors.location ? "border-2 border-red-500" : "border-[gray]"
              }`}
            />
          </div>
        </div>


        <div className="grid grid-cols-4 gap-6 mt-6">
          {[
            { name: "bedrooms", label: "No of Bedrooms" },
            { name: "bathrooms", label: "No of Bathrooms" },
            { name: "price", label: "Monthly Rent (Ksh)" },
            { name: "toilets", label: "No of Toilets" },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-semibold text-gray-600 mb-2">{field.label}</label>
              <input
                onChange={handleChange}
                name={field.name}
                type="text"
                placeholder={field.label}
                className={`w-full border rounded-lg p-3 ${
                  errors[field.name] ? "border-2 border-red-500" : "border-[gray]"
                }`}
              />
            </div>
          ))}
        </div>


        <div className="mt-6 text-center ">
        <h2 className="block font-semibold text-gray-600">Features</h2>
          <div  className="grid grid-cols-4 gap-6 mt-6">
          {[
     "Master Ensuite",
     "Pets Allowed",
     "Open Kitchen",
     "Elevator/ Lift",
     "Steam and Sauna",
     "CCTV Surveillance",
     "Restaurant within",
     "Backyard/ Garden",
     "Parking",
     "Swimming Pool",
     "All Ensuite",
     "Closed Kitchen",
     "Kids Play Area",
     "Borehole",
     "Electric Fence",
     "Club House",
          ].map((feature, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                onChange={handleChange}
                name="features"
                type="checkbox"
                value={feature}
                className="form-checkbox"
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>
        </div>


        <div className="mt-6">
          <label className="block font-semibold text-gray-600 mb-2">Description</label>
          <textarea
            onChange={handleChange}
            name="description"
            placeholder="Write your description here..."
            className={`w-full border rounded-lg p-3 ${
              errors.description ? "border-2 border-red-500" : "border-[gray]"
            }`}
            rows={5}
          ></textarea>
        </div>


        <div className="mt-6">
          <label className="block font-semibold text-gray-600 mb-2">Property Images</label>
          <input
  type="file"
  multiple
  accept="image/*"
  onChange={handleImageUpload}
  className={`w-full p-3 ${
    errors.images ? "border-2 border-red-500" : "border-[gray]"
  }`}
/>

<div className="grid grid-cols-3 gap-4 mt-4">
  {imagePreviews.map((src, index) => (
    <img
      key={index}
      src={src}
      alt={`Preview ${index + 1}`}
      className="w-full h-32 object-cover rounded-lg"
    />
  ))}
</div>

        </div>


        <div className="mt-6">
          <h3 className="font-bold text-gray-800 mb-4">Choose Your Plan</h3>
          <div className="grid grid-cols-3 gap-6">
            {[
              { label: "WEEK", duration: "7 days", price: "Ksh 490" },
              { label: "Month", duration: "30 days", price: "Ksh 1,950" },
              { label: "Year", duration: "366 days", price: "Ksh 19,620" },
            ].map((plan) => (
              <div
                key={plan.label}
                onClick={() => setSelectedPlan(plan.label.toLowerCase())}
                className={`border rounded-lg p-6 text-center cursor-pointer ${
                  selectedPlan === plan.label.toLowerCase()
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <h4 className="font-semibold text-gray-800">{plan.label}</h4>
                <p className="text-sm text-gray-500">{plan.duration}</p>
                <p className="font-bold text-gray-800 mt-2">{plan.price}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}





