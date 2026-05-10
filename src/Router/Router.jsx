import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import Profile from "../Page/Profile";
import SignUp from "../Page/Authentication/SignUp";
import Login from "../Page/Authentication/Login";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Layout,

    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
