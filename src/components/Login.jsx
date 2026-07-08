import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
  const[user, setUser]=useState({
    email:"",
    password:"",
  });
const[email,password]=user;
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
<div>
  <form>
  <div class="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlfor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlfor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
  )
}

export default Login