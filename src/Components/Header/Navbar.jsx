import { IoNotificationsSharp } from "react-icons/io5";
import logo from "../../assets/Logo/closer_logo.png";
import { BiSearch, BiHomeAlt, BiUserCircle, BiLayout } from "react-icons/bi";
import { Link, NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
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
        to="/profile"
        className={({ isActive }) =>
          `flex flex-col items-center px-8 py-2 border-b-4 transition-all ${isActive ? "border-sky-600/90 text-sky-600/90" : "border-transparent hover:bg-gray-100 rounded-lg"}`
        }
      >
        <BiUserCircle size={28} />
      </NavLink>
      <NavLink
        to="/marketplace"
        className={({ isActive }) =>
          `flex flex-col items-center px-8 py-2 border-b-4 transition-all ${isActive ? "border-sky-600/90 text-sky-600/90" : "border-transparent hover:bg-gray-100 rounded-lg"}`
        }
      >
        <IoNotificationsSharp size={28} />
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 border-b border-gray-300 sticky top-0 z-50 w-full flex flex-col justify-center">
      <div className="px-4">
        <div className="navbar min-h-15">
          {/* --- Left Side: Logo & Search --- */}
          <div className="navbar-start gap-2">
            <div className="flex items-center">
              <img
                className="w-10 h-10 object-contain"
                src={logo}
                alt="Closer Logo"
              />
              <h1 className="text-2xl font-black tracking-tighter text-sky-600/90 ">
                CLOSER
              </h1>
            </div>
            {/* Search Input for Desktop */}
            <div className="ml-2 hidden md:block w-64">
              <label className="input input-bordered bg-gray-100 border-none rounded-full flex items-center gap-2 h-10">
                <BiSearch size={20} className="opacity-60" />
                <input
                  type="search"
                  className="grow text-sm"
                  placeholder="Search Closer"
                />
              </label>
            </div>
          </div>

          {/* --- Middle Side: Desktop Navigation --- */}
          <div className="navbar-center hidden lg:flex">
            <div className="flex items-center gap-2">{links}</div>
          </div>

          {/* --- Right Side: User Actions --- */}
          <div className="navbar-end gap-2">
            {user ? (
              ""
            ) : (
              <Link
                to="/signUp"
                className="btn btn-info text-white hidden md:block"
              >
                SignUp
              </Link>
            )}
            {/* Search Icon for Mobile/Tablet */}
            <button className="btn btn-ghost btn-circle md:hidden bg-gray-100">
              <BiSearch size={20} />
            </button>

            {/* User Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full bg-gray-200 hidden lg:block">
                  <img
                    alt="User Profile"
                    src={
                      user?.photoURL ||
                      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    }
                  />
                </div>

                <div className="lg:hidden">
                  <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current"
                      >
                        {" "}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        ></path>{" "}
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-xl z-1 mt-3 w-64 p-2 shadow-xl border border-gray-100"
              >
                {/* Mobile specific links shown in profile dropdown */}
                <div className="lg:hidden border-b pb-2 mb-2">
                  <li className="menu-title text-blue-600">Navigation</li>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/marketplace">Marketplace</NavLink>
                  </li>
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                  </li>
                </div>
                <li>
                  <a className="font-semibold py-3">Settings & Privacy</a>
                </li>
                <li>
                  <button
                    onClick={() => handleLogOut()}
                    className="font-semibold py-3 text-red-500"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-10 mb-5 lg:hidden">
        {/* <label className="input w-full rounded-2xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label> */}

        <div className="flex justify-center">{links}</div>
      </div>
    </div>
  );
};

export default Navbar;
