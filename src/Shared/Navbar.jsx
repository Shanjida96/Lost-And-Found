import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../contexts/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        console.log("Signed Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-lg">Lost Our Stuff.com</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/lostandfound">Lost And Found</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-10px">
        {user ? (
          <NavLink className="btn" onClick={handleSignOut}>
            Sign Out
          </NavLink>
        ) : (
          <>
            <NavLink to="/register" className="btn">
              Sign Up
            </NavLink>
            <NavLink to="/signin" className="btn">
              Log In
            </NavLink>
          </>
        )}
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          {user && (
            <div className="w-10 rounded-full">
              <img alt="PFP" src={user?.photoURL} />
            </div>
          )}
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-5 shadow"
        >
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/lostandfound">Add Lost And Found</NavLink>
          </li>
          <li>
            <NavLink to="/recovered">Recovered Items</NavLink>
          </li>
          <li>
            <NavLink to="/manage">Manage My Items</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
