import Lottie from 'lottie-react';
import React from 'react';
import LogInLottie from '../assets/Lotties/Login.json'
import { NavLink } from 'react-router';
import GitHubLogin from '../Shared/GitHubLogin';
const SignIn = () => {
    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie style={{width: "300px"}} animationData={LogInLottie} loop= {true}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-5xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><NavLink className="link link-hover">Forgot password?</NavLink></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-sm'>Don't have an account? <NavLink to="/register" className="text-cyan-500">Sign Up</NavLink></p>
        <GitHubLogin></GitHubLogin>
        </fieldset>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignIn;