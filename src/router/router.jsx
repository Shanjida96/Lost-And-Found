import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import AddLostAndFound from "../pages/AddLostAndFound/AddLostAndFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home 
      },
      {
        path: "/signin",
        Component: SignIn
      },
      {
        path: "/register",
        Component: Register
      },
      {
        path: "/lostandfound",
        Component: AddLostAndFound
      }
    ]
  },
]);

export default router;