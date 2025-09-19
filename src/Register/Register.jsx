import Lottie from "lottie-react";
import React, { use } from "react";
import { NavLink } from "react-router";
import RegisterLottie from "../assets/Lotties/Register.json"
import { AuthContext } from "../contexts/AuthContext/AuthContext";
const Register = () => {
  const {createUser} = use(AuthContext);
  const handleRegister = e =>{
    e.preventDefault()
    const form = e.target
    const formData = new FormData(form);
    const {email,password,...restFormData}= Object.fromEntries(formData.entries());

    createUser(email,password)
    .then((result)=>{
      console.log(result.user)
      const userProfile = {
        email,
        ...restFormData
      }
      console.log(userProfile)
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <Lottie style={{width: "300px"}} animationData={RegisterLottie}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Sign Up</h1>
       <form onSubmit={handleRegister}>
         <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" name="email" placeholder="Enter Your Email" />
          <label className="label">Name</label>
          <input type="name" className="input" name="name" placeholder="Enter Your Name" />
          <label className="label">Photo URL</label>
          <input type="text" className="input" name="photoURL" placeholder="Enter Your Photo" />
          <label className="label">Password</label>
          <input type="password" className="input" name="password" placeholder="Password" />
          <p className="text-sm">Already have an account?<NavLink className="link link-hover text-cyan-500" to="/signin">Log In</NavLink></p>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </fieldset>
       </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;
