import Lottie from "lottie-react";
import React from "react";
import { NavLink } from "react-router";
import RegisterLottie from "../assets/Lotties/Register.json"
const Register = () => {
  return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <Lottie style={{width: "300px"}} animationData={RegisterLottie}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Sign Up</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Enter Your Email" />
          <label className="label">Name</label>
          <input type="name" className="input" placeholder="Enter Your Name" />
          <label className="label">Photo URL</label>
          <input type="photo" className="input" placeholder="Enter Your Photo" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <p className="text-sm">Already have an account?<NavLink className="link link-hover text-cyan-500" to="/signin">Log In</NavLink></p>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;
