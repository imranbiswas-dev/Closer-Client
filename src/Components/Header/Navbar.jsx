import { IoNotificationsSharp } from "react-icons/io5";
import logo from "../../assets/Logo/closer_logo.png";
import { BiSearch, BiHomeAlt, BiUserCircle, BiLayout } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import { useContext, useState, useEffect, useRef } from "react"; 
import { AuthContext } from "../Context/AuthContext/AuthContext";
import Notification from "../../Page/Notification";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showNotifications, setShowNotifications] = useState(false);

  const notificationRef = useRef(null);

  const handleLogOut = () => {
    logOut();
  };

  
  useEffect(() => {
    const handleClickOutside = (event) => {
   
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };


    document.addEventListener("mousedown", handleClickOutside);
    
   
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `flex flex-col items-center px-8 py-2 border-b-4 transition-all ${isActive ? "border-sky-600/90 text-sky-600/90" : "border-transparent hover:bg-gray-100 rounded-lg"}`
        }
      >
        <BiHomeAlt size={28} />
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) =>
          `flex flex-col items-center px-8 py-2 border-b-4 transition-all ${isActive ? "border-sky-600/90 text-sky-600/90" : "border-transparent hover:bg-gray-100 rounded-lg"}`
        }
      >
        <BiLayout size={28} />
      </NavLink>

      <NavLink
        to={`/profile/${user?.email}`}
        className={({ isActive }) =>
          `flex flex-col items-center px-8 py-2 border-b-4 transition-all ${isActive ? "border-sky-600/90 text-sky-600/90" : "border-transparent hover:bg-gray-100 rounded-lg"}`
        }
      >
        <BiUserCircle size={28} />
      </NavLink>

      {/* Notification Area with Ref (Added here) */}
      <div className="relative" ref={notificationRef}>
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className={`flex flex-col items-center px-8 py-2 border-b-4 transition-all relative ${showNotifications ? "border-sky-600/90 text-sky-600/90" : "border-transparent hover:bg-gray-100 rounded-lg"}`}
        >
          <IoNotificationsSharp size={28} />
          {/* Notification Badge */}
          {/* <span className="absolute top-1 right-7 bg-red-500 text-white text-[10px] font-bold px-1.5 rounded-full border-2 border-white">
            3
          </span> */}
        </button>

        {/* Show Notification Modal */}
        {showNotifications && (
          <div className="absolute top-full right-0 mt-2 z-[100]">
             <Notification />
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="bg-base-100 border-b border-gray-300 sticky top-0 z-50 w-full flex flex-col justify-center">
      <div className="px-4">
        <div className="navbar min-h-15">
          {/* --- Left Side --- */}
          <div className="navbar-start gap-2">
            <div className="flex items-center">
              <img className="w-10 h-10 object-contain" src={logo} alt="Closer Logo" />
              <h1 className="text-2xl font-black tracking-tighter text-sky-600/90">CLOSER</h1>
            </div>
            <div className="ml-2 hidden md:block w-64">
              <label className="input input-bordered bg-gray-100 border-none rounded-full flex items-center gap-2 h-10">
                <BiSearch size={20} className="opacity-60" />
                <input type="search" className="grow text-sm" placeholder="Search Closer" />
              </label>
            </div>
          </div>

          {/* --- Middle Side: Desktop Navigation --- */}
          <div className="navbar-center hidden lg:flex">
            <div className="flex items-center gap-2">{links}</div>
          </div>

          {/* --- Right Side --- */}
          <div className="navbar-end gap-2">
            {!user && (
              <Link to="/signUp" className="btn btn-info text-white hidden md:block">
                SignUp
              </Link>
            )}
            <button className="btn btn-ghost btn-circle md:hidden bg-gray-100">
              <BiSearch size={20} />
            </button>

            {/* User Dropdown */}
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-gray-200 hidden lg:block">
                  <img src={user?.photo || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} alt="Profile" />
                </div>
                <div className="lg:hidden">
                  <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-1 mt-3 w-64 p-2 shadow-xl border border-gray-100">
                <div className="lg:hidden border-b pb-2 mb-2">
                  <li className="menu-title text-blue-600">Navigation</li>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to={`/profile/${user?.email}`}>Profile</NavLink></li>
                  <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                  <li><NavLink to="/notifications">All Notifications</NavLink></li>
                </div>
                <li><a className="font-semibold py-3">Settings & Privacy</a></li>
                <li><button onClick={() => handleLogOut()} className="font-semibold py-3 text-red-500">Logout</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Links Container */}
      <div className="mx-10 mb-5 lg:hidden flex justify-center">
        {links}
      </div>
    </div>
  );
};

export default Navbar;