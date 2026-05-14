import React, { useContext } from "react";
import { BiLink, BiText, BiSend } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { AuthContext } from "../Components/Context/AuthContext/AuthContext";

const AddPost = () => {
  const { user } = useContext(AuthContext);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData(e.target);
//     const newPost = Object.fromEntries(formData.entries());

//     // console.log(newUser);

//     fetch("http://localhost:5000/post", {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(newPost),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const newPost = Object.fromEntries(formData.entries());

  // ইউজারের identity যোগ করো
  const postWithUser = {
    ...newPost,
    authorName: user?.name,
    authorPhoto: user?.photo,
    authorEmail: user?.email,
    createdAt: new Date(),
  };

  fetch("http://localhost:5000/post", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postWithUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Post created:", data);
    });
};

  return (
    <div className=" rounded-xl   w-full max-w-lg mx-auto overflow-hidden ">
      {/* Header */}

      <div className="flex space-x-4 m-5">
        <img
          alt=""
          src={user?.photo}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <a
            rel="noopener noreferrer"
            href="#"
            className="text-sm font-semibold"
          >
            {user?.name}
          </a>
          <span className="text-xs dark:text-gray-600">Public</span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="md:p-4 space-y-4">
        {/* User Identity */}

        {/* Post Title / Content */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600 flex items-center gap-1">
            <BiText /> Post Title
          </label>
          <textarea
            name="postTitle"
            placeholder="What's on your mind?"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none min-h-25 transition-all"
            required
          ></textarea>
        </div>

        {/* Photo URL Input */}
        <div className="space-y-1">
          <label className="text-sm font-semibold text-gray-600 flex items-center gap-1">
            <BiLink /> Photo URL
          </label>
          <input
            type="url"
            name="photo"
            placeholder="https://example.com/image.jpg"
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
          />
          <p className="text-[10px] text-gray-400 mt-1 italic">
            *Paste a direct image link from the web
          </p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-md"
        >
          <BiSend size={20} />
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
