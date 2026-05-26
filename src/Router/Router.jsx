import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";
import Profile from "../Page/Profile";
import SignUp from "../Page/Authentication/SignUp";
import Login from "../Page/Authentication/Login";
import UpdateProfile from "../Page/UpdateProfile";
import AddPost from "../Page/AddPost";
import Dashboard from "../Page/Dashboard";
import Notification from "../Page/Notification";
import EditPost from "../Page/EditPost";

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
        path: "/profile/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.email}`),
        element: <Profile />,
      },
      {
        path: "/updateProfile",
        Component: UpdateProfile,
      },
      {
        path: "/addPost",
        Component: AddPost,
      },
      {
        path: "/signUp",
        Component: SignUp,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/dashboard",
        Component: Dashboard,
      },
      {
        path: "/notification",
        Component: Notification,
      },
      {
        path: "/editPost/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/post/${params.id}`),
        Component: EditPost,
      },
    ],
  },
]);
