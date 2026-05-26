import React from "react";
import { BiCheckDouble, BiDotsHorizontalRounded } from "react-icons/bi";

const Notification = ({ notifications }) => {
  
  const dummyNotifications = [
    {
      id: 1,
      user: "Neymar Jr",
      action: "liked your photo",
      time: "2m ago",
      avatar: "https://readymadeui.com/profile_2.webp",
      isRead: false,
    },
    {
      id: 2,
      user: "Lionel Messi",
      action: "commented: 'Excellent frontend work, Sir!'",
      time: "1h ago",
      avatar: "https://readymadeui.com/profile_3.webp",
      isRead: false,
    },
  ];

  const data = [];

  return (
    <div className="w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in duration-200">
      {/* ১. Header: যেখানে শিরোনাম এবং 'Mark as read' বাটন থাকবে */}
      <div className="p-4 border-b flex justify-between items-center bg-white sticky top-0">
        <h3 className="text-lg font-bold text-gray-800">Notifications</h3>
        <div className="flex gap-1">
          <button
            className="p-2 hover:bg-gray-100 rounded-full text-blue-600 transition"
            title="Mark all as read"
          >
            <BiCheckDouble size={20} />
          </button>
        </div>
      </div>

      {/* ২. Notification List: এটি স্ক্রোলযোগ্য হবে */}
      <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
        {data.length > 0 ? (
          data.map((notif) => (
            <div
              key={notif.id}
              className={`flex items-start gap-3 p-4 hover:bg-sky-50 cursor-pointer transition-colors border-b border-gray-50 ${!notif.isRead ? "bg-sky-50/50" : ""}`}
            >
              {/* ইউজার অবতার */}
              <div className="relative shrink-0">
                <img
                  src={notif.avatar}
                  alt={notif.user}
                  className="w-11 h-11 rounded-full object-cover border border-gray-200"
                />
                {!notif.isRead && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-sky-600 border-2 border-white rounded-full"></span>
                )}
              </div>

              {/* নোটিফিকেশন টেক্সট */}
              <div className="flex-1">
                <p className="text-sm text-gray-800 leading-tight">
                  <span className="font-bold">{notif.user}</span> {notif.action}
                </p>
                <p
                  className={`text-[11px] mt-1 ${!notif.isRead ? "text-sky-600 font-bold" : "text-gray-500"}`}
                >
                  {notif.time}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="p-10 text-center text-gray-400 text-sm">
            No new notifications
          </div>
        )}
      </div>

      {/* ৩. Footer: সব নোটিফিকেশন দেখার লিংক */}
      <div className="p-3 border-t text-center bg-gray-50">
        <button className="text-xs font-bold text-sky-600 hover:underline">
          View All Notifications
        </button>
      </div>
    </div>
  );
};

export default Notification;
