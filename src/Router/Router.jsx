import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Page/Home";

export const router = createBrowserRouter([
  {
    path: "/",

    Component: Layout,

    children: [
      {
        index: true,

        Component: Home,
      },

    //   {
    //     path: "/about",

    //     Component: About,
    //   },
    ],
  },
]);
