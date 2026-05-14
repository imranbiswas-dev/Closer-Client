import { AiOutlineEdit } from "react-icons/ai";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail, MdOutlineEdit, MdWorkHistory } from "react-icons/md";
import { Link } from "react-router";
import UpdateProfile from "../../Page/UpdateProfile";

const ProfileCard = ({ profile }) => {
  const { name, photo, nickname, address, bio, } =
    profile;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden max-w-275 mx-auto">
      {/* 1. Cover Photo Section (Placeholder) */}
      <div className="h-48 md:h-64 bg-linear-to-r from-blue-400 to-blue-600 relative"></div>

      {/* 2. Profile Info Section */}
      <div className="px-4 pb-6">
        <div className="relative flex flex-col md:flex-row items-center md:items-end -mt-12 md:-mt-16 md:space-x-5 px-4">
          {/* Profile Picture with Border */}
          <div className="relative">
            <img
              src={photo}
              alt={name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md object-cover bg-gray-100"
            />
            {/* Online Status Indicator */}
            <span className="absolute bottom-3 right-3 w-5 h-5 bg-green-500 border-4 border-white rounded-full"></span>
          </div>

          {/* Name and Stats Container */}
          <div className="flex-1 text-center md:text-left mt-4 md:mb-2">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <h1 className="text-3xl font-bold text-gray-900">{name}</h1>
              {nickname && (
                <span className="text-xl text-gray-500 font-medium">
                  ({nickname})
                </span>
              )}
            </div>

            {/* Stats Section: Facebook Style */}
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <p className="hover:underline cursor-pointer font-semibold text-gray-600">
                2.7k{" "}
                <span className="font-normal text-gray-500">followers</span>
              </p>
              <p className="hover:underline cursor-pointer font-semibold text-gray-600">
                1.4k{" "}
                <span className="font-normal text-gray-500">following</span>
              </p>
            </div>
          </div>

          {/* Action Buttons: Add to Story / Edit Profile */}
          {/* <div className="flex gap-2 mt-4 md:mb-2 w-full md:w-auto">
            <Link
              to="/updateProfile"
              className="btn flex-1 md:flex-none px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition flex items-center gap-2"
            >
              <AiOutlineEdit size={20} />
              Edit Profile
            </Link>
          </div> */}

          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="flex gap-2 mt-5 items-center justify-center  px-6 py-3 text-sm tracking-wide text-white bg-blue-500 rounded-lg hover:bg-blue-400"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <MdOutlineEdit size={24} />
            Edit Profile
          </button>
          <dialog id="my_modal_3" className="modal ">
            <div className="modal-box ">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <UpdateProfile />
            </div>
          </dialog>
        </div>

        {/* 3. Bio & Details Section */}
        <div className="mt-6 border-t pt-4 px-4">
          <div className="max-w-md mx-auto md:mx-0">
            <p className="text-center md:text-left text-gray-700 font-medium mb-3 italic">
              {bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
