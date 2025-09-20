import Lottie from "lottie-react";
import React, { use, useState } from "react";
import { NavLink } from "react-router";
import RegisterLottie from "../assets/Lotties/Register.json";
import { AuthContext } from "../contexts/AuthContext/AuthContext";
import Swal from "sweetalert2";
const Register = () => {
  const { createUser } = use(AuthContext);
  const [error, setError] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Password should consists of six characters",
      });

      return;
    } else if (!hasLower) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one lowercase letters",
      });

      return;
    } else if (!hasUpper) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one uppercase letters",
      });
      return;
    } else {
      setError("");
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...restFormData,
        };
        console.log(userProfile);
        Swal.fire({
          title: "Your Account is created successfully!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        console.log(error);
         Swal.fire({
        icon: "error",
        title: "Error",
        text: {error}
      });
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            style={{ width: "300px" }}
            animationData={RegisterLottie}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign Up</h1>
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <label className="label">Name</label>
                <input
                  type="name"
                  className="input"
                  name="name"
                  placeholder="Enter Your Name"
                />
                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input"
                  name="photoURL"
                  placeholder="Enter Your Photo"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />
                <p className="text-sm">
                  Already have an account?
                  <NavLink
                    className="link link-hover text-cyan-500"
                    to="/signin"
                  >
                    Log In
                  </NavLink>
                </p>
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
