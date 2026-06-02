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
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile/:email",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/user/${params.email}`),
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/addPost",
        element: (
          <PrivateRoute>
            <AddPost />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/notification",
        element: (
          <PrivateRoute>
            <Notification />
          </PrivateRoute>
        ),
      },
      {
        path: "/editPost/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/post/${params.id}`),
        element: (
          <PrivateRoute>
            <EditPost />
          </PrivateRoute>
        ),
      },

      // Public routes
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
