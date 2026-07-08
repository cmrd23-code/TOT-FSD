import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await axios.get("http://localhost:3002/user");
      console.log(res.data);
      setUser(res.data.userData);
    } catch (err) {
      console.error("Error!", err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3002/delete/${id}`);
      loadUser(); // Refresh table
    } catch (err) {
      console.error("Delete Error!", err);
    }
  };

  const updateUser = (id) => {
    // Navigate to update page
    console.log("Update User:", id);
    // Example:
    // navigate(`/update/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Student List</h2>

      <table className="table table-bordered table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th style={{ width: "200px" }}>Action</th>
          </tr>
        </thead>

        <tbody>
          {user.length > 0 ? (
            user.map((usr) => (
              <tr key={usr.id}>
                <td>{usr.id}</td>
                <td>{usr.name}</td>
                <td>{usr.email}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => updateUser(usr.id)}
                  >
                    Update
                  </button>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteUser(usr.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Users Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewUser;
