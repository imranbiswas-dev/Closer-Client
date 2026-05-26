import React from "react";
import {
  BiStats,
  BiUser,
  BiMessageSquareDetail,
  BiHeart,
  BiTrendingUp,
  BiPlusCircle,
} from "react-icons/bi";

const Dashboard = ({ profile, posts }) => {
  // ডামি ডাটা (আপনি পরবর্তীতে ব্যাকএন্ড থেকে এগুলো নিয়ে আসবেন)
  const stats = [
    {
      id: 1,
      label: "Total Posts",
      value: posts?.length || 0,
      icon: <BiMessageSquareDetail size={24} />,
      color: "bg-blue-500",
    },
    {
      id: 2,
      label: "Total Likes",
      value: "12.5k",
      icon: <BiHeart size={24} />,
      color: "bg-red-500",
    },
    {
      id: 3,
      label: "Followers",
      value: "2.7k",
      icon: <BiUser size={24} />,
      color: "bg-green-500",
    },
    {
      id: 4,
      label: "Engagement",
      value: "18%",
      icon: <BiTrendingUp size={24} />,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4 lg:p-8">
      {/* 1. Welcome Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Welcome back, {profile?.name?.split(" ")[0] || "Sir"}!
          </h1>
          <p className="text-gray-500 mt-1">
            Here's what's happening with your profile today.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md active:scale-95">
          <BiPlusCircle size={20} />
          Create New Post
        </button>
      </div>

      {/* 2. Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4"
          >
            <div
              className={`${stat.color} p-3 rounded-xl text-white shadow-lg`}
            >
              {stat.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Main Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Activity / Insights */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">
                Recent Post Analytics
              </h2>
              <button className="text-blue-600 text-sm font-semibold hover:underline">
                View All
              </button>
            </div>

            {/* Placeholder for Chart or Recent Post Summary */}
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg overflow-hidden">
                      {/* Image Placeholder */}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 line-clamp-1">
                        Sample Post Title {item}
                      </p>
                      <p className="text-xs text-gray-500">Posted 2 days ago</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-600">
                      +{Math.floor(Math.random() * 100)}
                    </p>
                    <p className="text-[10px] text-gray-400 uppercase">
                      New Likes
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Quick Actions & Profile Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Profile Performance
            </h2>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-500">Profile Visits</span>
                <span className="font-bold text-green-600">+12%</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-500">Post Reach</span>
                <span className="font-bold text-blue-600">4,520</span>
              </div>
              <div className="flex justify-between items-center border-b pb-2">
                <span className="text-gray-500">New Followers</span>
                <span className="font-bold text-purple-600">84</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-lg font-bold mb-2">Upgrade to Pro</h3>
              <p className="text-blue-100 text-sm mb-4">
                Get detailed insights and advanced profile tools.
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-bold text-sm">
                Learn More
              </button>
            </div>
            <div className="absolute -right-5 -bottom-5 opacity-10">
              <BiStats size={120} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
