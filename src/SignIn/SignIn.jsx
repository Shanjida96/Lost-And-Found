import Lottie from "lottie-react";
import React, { use } from "react";
import LogInLottie from "../assets/Lotties/Login.json";
import { NavLink, useLocation, useNavigate } from "react-router";
import GitHubLogin from "../Shared/GoogleLogin";
import GoogleLogin from "../Shared/GoogleLogin";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(from);
        Swal.fire({
          title: "Log In Successful!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
         Swal.fire({
        icon: "error",
        title: "Error",
        text: {error},
      });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            animationData={LogInLottie}
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSignIn}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <NavLink className="link link-hover">
                    Forgot password?
                  </NavLink>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="text-sm">
                  Don't have an account?{" "}
                  <NavLink to="/register" className="text-cyan-500">
                    Sign Up
                  </NavLink>
                </p>
              </fieldset>
            </form>
            <GoogleLogin from={from}></GoogleLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
