import { useContext } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComments, FaShare } from "react-icons/fa";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const PostCard = ({post}) => {
  const {user}=useContext(AuthContext)
  const {postTitle, photo, authorName, authorPhoto, createdAt} = post
  return (
    <div className=" lg:w-170 w-ful  mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
      
      {/* Header */}
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex items-center gap-3">
          <img
            src={authorPhoto}
            alt="Leroy Jenkins"
            className="w-11 h-11 rounded-full object-cover ring-2 ring-violet-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-900"
          />
          <div>
            <a href="#" className="font-semibold text-gray-900 dark:text-white hover:underline">
              {authorName}
            </a>
            <p className="text-xs text-gray-500 dark:text-gray-400">{createdAt}</p>
          </div>
        </div>

        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </button>
      </div>

      {/* Post Content */}
      <div className="px-5 pb-3">
        <h2 className="text-[17px] leading-snug font-medium text-gray-900 dark:text-gray-100">
          {postTitle}
        </h2>
      </div>

      {/* Image */}
      <div className="relative">
        <img
          src={photo}
          alt="Post image"
          className="w-full object-cover max-h-105 bg-gray-100 dark:bg-gray-800"
        />
      </div>

      {/* Engagement Bar */}
      <div className="px-5 py-3 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
          
          <span className="font-medium">283</span>
          <p>likes</p>
        </div>

        <div className="text-gray-600 dark:text-gray-400 font-medium">
          30 comments
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-t border-gray-200 dark:border-gray-800 mx-2 mb-2 rounded-xl">
        <div className="grid grid-cols-3 text-gray-600 dark:text-gray-400">
          
          <button className="flex items-center justify-center gap-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all active:scale-95">
            <AiFillLike />
            <span className="font-medium text-sm">Like</span>
          </button>

          <button className="flex items-center justify-center gap-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all active:scale-95">
            <FaComments />
            <span className="font-medium text-sm">Comment</span>
          </button>

          <button className="flex items-center justify-center gap-2 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl transition-all active:scale-95">
            <FaShare />
            <span className="font-medium text-sm">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;