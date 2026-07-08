import React, { useEffect, useState } from "react";
import axios from "axios";
const RegisterUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const onInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/register", user);
      alert("User Registered Successfully");
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
            <div className="mb-3">
              <label className="form-label fw-bold">Password</label>

              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onInputChange}
                placeholder="Enter Password"
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

export default RegisterUser;
