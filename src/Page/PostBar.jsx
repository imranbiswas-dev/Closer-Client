import { useContext } from "react";
import AddPost from "./AddPost";
import { AuthContext } from "../Components/Context/AuthContext/AuthContext";


const PostBar = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="border-b  border-gray-300 md:mb-6 mb-3  md:border-0 md:mt-5 lg:mt-0 md:w-170 mx-auto ">
      <div className="navbar md:border border-gray-300 bg-base-100 p-5 md:rounded-2xl ">
        <div className="dropdown  ml-3">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user?.photo}
              />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

        {/* input */}
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="w-full mx-3"
        >
          <input
            type="text"
            placeholder="What's on your mind?"
            className="input w-full rounded-2xl"
          />
        </button>

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <div className="flex items-center justify-between p-4 border-b ">
                <h3 className="text-lg font-bold">
                  Create New Post
                </h3>
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </div>
            </form>
            <AddPost />
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default PostBar;
