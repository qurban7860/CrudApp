// src/components/UserForm.jsx

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, updateUser } from "../features/userSlice";
import { v4 as uuidv4 } from "uuid";
import { FaUser} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

export default function UserForm({ user, onCancel }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setPhone(user.phone);
      setAddress(user.address);
    } else {
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
    }
  }, [user]);

  const validateForm = () => {
    let formErrors = {};

    if (!name.trim()) {
      formErrors.name = "Name is required.";
    }
    if (!email.trim()) {
      formErrors.email = "Email is required.";
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      formErrors.email = "Please enter a valid email address.";
    }
    if (!phone.trim()) {
      formErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Please enter a valid 10-digit phone number.";
    }
    if (!address.trim()) {
      formErrors.address = "Address is required.";
    }

    return formErrors;
  };

  const handleSubmit = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      if (user) {
         // Update existing user
        dispatch(updateUser({ id: user.id, fields: { name, email, phone, address } }));
        setSuccessMessage("User updated successfully!");
      } else {
         // Add new user
        dispatch(addUser({ id: uuidv4(), name, email, phone, address }));
        setSuccessMessage("User added successfully!");
      }
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setErrors({});

      setTimeout(() => {
        navigate("/user-list"); 
      }, 1000); 
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-md mx-auto mt-20">
      <h1 className="text-2xl font-bold text-center mb-5">User CRUD System</h1>
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg">
          {successMessage}
        </div>
      )}
      <div className="space-y-4">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className={`w-full p-3 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className={`w-full p-3 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter phone number"
            className={`w-full p-3 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.phone ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter address"
            className={`w-full p-3 border ${
              errors.address ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.address ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 flex items-center gap-2"
        ><FaUser className="text-lg" />
          {user ? "Update User" : "Add User"}
        </button>
        {user && (
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
