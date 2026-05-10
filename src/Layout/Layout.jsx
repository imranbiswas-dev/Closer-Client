import { Outlet } from "react-router";
import Navbar from "../Components/Header/Navbar";

const Layout = () => {
  return (
    <div className="bg-base-100 ">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
