import { useLoaderData } from "react-router";
import ProfileCard from "../Components/CardComponent/ProfileCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Context/AuthContext/AuthContext";
import PostCard from "../Components/CardComponent/PostCard";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail, MdWorkHistory } from "react-icons/md";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { BiInfoCircle } from "react-icons/bi";

const Profile = () => {
  const profileData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      setLoading(true);
      fetch(`http://localhost:5000/post/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching posts:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  return (
    <div className="max-w-6xl mx-auto px-4 pb-10">
      {/* Header Section - Full Width */}
      <header className="mb-6 w-full">
        <ProfileCard profile={profileData} />
      </header>

      {/* Main Content Layout */}
      <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Side: Intro / Info (Sticky) */}
        <div className="lg:col-span-4 lg:sticky lg:top-20 w-full">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <BiInfoCircle className="text-blue-600" /> Intro
            </h2>
            
            <div className="space-y-4 text-gray-700">
              {/* Category */}
              <div className="p-3 bg-blue-50 rounded-lg text-blue-700 font-semibold text-center">
                {profileData?.category || "Community Member"}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaLocationDot className="text-gray-400" size={18} />
                  <span>Lives in <span className="font-bold">{profileData?.address || "Bangladesh"}</span></span>
                </div>

                <div className="flex items-center gap-3">
                  <MdWorkHistory className="text-gray-400" size={20} />
                  <span>Works at <span className="font-bold">{profileData?.education || "N/A"}</span></span>
                </div>

                <div className="flex items-center gap-3">
                  <MdEmail className="text-gray-400" size={20} />
                  <span className="truncate">{profileData?.email || "Private Email"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <FaPhone className="text-gray-400" size={16} />
                  <span>{profileData?.phone || "No phone added"}</span>
                </div>

                <div className="flex items-center gap-3">
                  <LiaBirthdayCakeSolid className="text-gray-400" size={20} />
                  <span>Born on <span className="font-bold">{profileData?.birth || "Hidden"}</span></span>
                </div>
              </div>

              {/* <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 font-semibold rounded-lg transition mt-4">
                Edit Details
              </button> */}
            </div>
          </div>
        </div>

        {/* Right Side: Feed / Posts - Fix for Card Width */}
        <div className="lg:col-span-8 flex flex-col gap-5 w-full items-stretch">
          {loading ? (
            <div className="flex justify-center p-10 w-full">
              <span className="loading loading-spinner loading-lg text-blue-600"></span>
            </div>
          ) : posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className="w-full">
                <PostCard post={post} />
              </div>
            ))
          ) : (
            <div className="bg-white p-10 rounded-xl border border-dashed border-gray-300 text-center text-gray-500 w-full">
              <p className="text-lg font-medium">No posts to show yet.</p>
              <p className="text-sm">When you share something, it will appear here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Profile;