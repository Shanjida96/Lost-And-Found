import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";
import AddLostAndFound from "../pages/AddLostAndFound/AddLostAndFound";
import PrivateRoute from "../routes/PrivateRoute";
import PostDetails from "../pages/PostDetails/PostDetails";

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
        element: <PrivateRoute><AddLostAndFound></AddLostAndFound></PrivateRoute>
      },
      {
        path: '/items/:id',
        Component: PostDetails,
        loader: ({params})=> fetch(`http://localhost:3000/items/${params.id}`)
      }
    ]
  },
]);

export default router;