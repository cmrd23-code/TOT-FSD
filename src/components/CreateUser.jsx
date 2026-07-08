import axios from "axios";
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const CreateUser = () => {
//   const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const { name, email } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/create", user);
      alert("User Added Successfully");
    //   navigate("/user");
    } catch (err) {
      console.log(err);
      alert("Failed to add user");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow col-md-6 mx-auto">
        <div className="card-header bg-primary text-white">
          <h3 className="text-center">Add New User</h3>
        </div>

        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Name</label>

              <input
                type="text"
                className="form-control"
                name="name"
                value={name}
                onChange={onInputChange}
                placeholder="Enter Name"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>

              <input
                type="email"
                className="form-control"
                name="email"
                value={email}
                onChange={onInputChange}
                placeholder="Enter Email"
                required
              />
            </div>

            <button type="submit" className="btn btn-success me-2">
              Save User
            </button>

            <button
              type="button"
              className="btn btn-secondary"
            //   onClick={() => navigate("/")}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
