const PostBar = () => {
  return (
    <div className="border-b  border-gray-300 md:mb-6 mb-3  md:border-0 md:mt-5 lg:mt-0 md:w-xl mx-auto " >
      <div className="navbar md:border border-gray-300 bg-base-100 p-5 md:rounded-2xl " >
        <div className="dropdown  ml-3">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
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
        <div className="w-full mx-3">
          <input
            type="text"
            placeholder="What's on your mind?"
            className="input w-full rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PostBar;
