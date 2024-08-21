// src/components/UserList.jsx

import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../features/userSlice";
import { useState } from "react";
import UserForm from "./userForm";
import { FaUser, FaEdit, FaTrash } from 'react-icons/fa';

export default function UserList() {
  const users = useSelector(state => state.user.users);
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleEdit = (user) => {
    setEditMode(true);
    setCurrentUser(user);
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  const handleSave = () => {
    setEditMode(false);
    setCurrentUser(null);
  };

  const handleCancel = () => {
    setEditMode(false);
    setCurrentUser(null);
  };

  return (
    <div className="p-4 mt-20">
      <h2 className="text-xl font-bold flex items-center gap-2 mb-5 justify-center">
        <FaUser className="text-lg" /> User List
      </h2>
      {editMode ? (
        <UserForm user={currentUser} onCancel={handleCancel} onSave={handleSave} />
      ) : (
        <>
          <ul>
            {users.map(user => (
              <li key={user.id} className="flex justify-between items-center border p-2 mb-2">
                <span className="flex-1">
                  <strong>Name:</strong> {user.name} <br />
                  <strong>Email:</strong> {user.email} <br />
                  <strong>Phone:</strong> {user.phone} <br />
                  <strong>Address:</strong> {user.address}
                </span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center gap-2 max-md:text-sm"
                  > <FaEdit className="text-lg" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2 max-md:text-sm"
                  > 
                    <FaTrash className="text-lg" /> 
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
