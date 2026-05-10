import { FaFire, FaGift } from "react-icons/fa";

const RightAside = () => {
  const birthdays = [
    {
      id: 1,
      name: "Sakib Hasan",
      image: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "Nusrat Jahan",
      image: "https://i.pravatar.cc/40?img=2",
    },
  ];

  const trends = [
    "#HappyMothersDay",
    "#BreakTheStigma",
    "##BeautifulBangladesh",
    "#CincoDeMayo2026",
    "#Springtime",
  ];


  return (
    <div
      className="min-h-screen p-3 space-y-2 w-96 bg-base-100 "
      style={{ boxShadow: "-4px 0 6px rgba(0,0,0,0.1)" }}
    >
      {/* Birthday Section */}
      <div className="bg-base-200 rounded-2xl p-5 shadow-sm space-y-3">
        <div className="flex items-center gap-2 mb-5">
          <FaGift className="text-pink-500 text-xl" />
          <h2 className="text-lg font-bold">Birthdays</h2>
        </div>

        <div className="space-y-4 ">
          {birthdays.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3"
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-11 h-11 rounded-full object-cover"
              />

              <p className="text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">{user.name}</span> has a
                birthday today 🎉
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="bg-base-200 rounded-2xl p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <FaFire className="text-orange-500 text-xl" />
          <h2 className="text-lg font-bold">Trending Topics</h2>
        </div>

        <div className="space-y-3">
          {trends.map((trend, index) => (
            <button
              key={index}
              className="w-full text-left px-4 py-3 rounded-xl bg-base-100 hover:bg-primary hover:text-white transition-all duration-300"
            >
              {trend}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightAside;
