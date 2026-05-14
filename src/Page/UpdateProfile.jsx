import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Components/Context/AuthContext/AuthContext";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState({
    name: "",
    nickname: "",
    phone: "",
    photo: "",
    address: "",
    category: "",
    birth: "",
    education: "",
    bio: "",
  });

  // === MongoDB থেকে user data আনো ===
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/user/${user.email}`)
        .then((res) => res.json())
        .then((data) => setDbUser(data))
        .catch((err) => console.error("Failed to fetch user:", err));
    }
  }, [user?.email]);

  const handleUpdate = () => {


    const { _id, ...updateData } = dbUser;

    fetch(`http://localhost:5000/user/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Update result:", result);

        if (result.modifiedCount > 0) {
          setUser({ ...user, ...updateData });

          setDbUser({ ...dbUser, ...updateData });
        }
      })
      .catch((err) => console.error("Update failed:", err));
  };

  return (
    <div>
      <div className="flex items-center w-full max-w-3xl p-8 mx-auto">
        <div className="w-full">
          <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
            Update Your Profile
          </h1>

          <form onSubmit={handleUpdate}>
            <fieldset className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              {/* Full Name */}
              <div>
                <label className="block mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={dbUser?.name || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, name: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                />
              </div>

              {/* Nickname */}
              <div>
                <label className="block mb-2 text-sm">Nickname</label>
                <input
                  type="text"
                  name="nickname"
                  value={dbUser?.nickname || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, nickname: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 text-sm">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={dbUser?.phone || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, phone: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                />
              </div>

              {/* Photo */}
              <div>
                <label className="block mb-2 text-sm">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  value={dbUser?.photo || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, photo: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block mb-2 text-sm">Address</label>
                <input
                  type="text"
                  name="address"
                  value={dbUser?.address || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, address: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block mb-2 text-sm">Category</label>
                <select
                  name="category"
                  value={dbUser?.category || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, category: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                >
                  <option value="">Select your category</option>
                  <option value="creator">Digital Creator</option>
                  <option value="student">Student</option>
                  <option value="engineer">Self employed</option>
                </select>
              </div>

              {/* Birth */}
              <div>
                <label className="block mb-2 text-sm">Date of Birth</label>
                <input
                  type="date"
                  name="birth"
                  value={dbUser?.birth || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, birth: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                />
              </div>

              {/* Education */}
              <div>
                <label className="block mb-2 text-sm">Education</label>
                <input
                  type="text"
                  name="education"
                  value={dbUser?.education || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, education: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                />
              </div>

              {/* Short Bio */}
              <div className="md:col-span-2">
                <label className="block mb-2 text-sm">Short Bio</label>
                <input
                  type="text"
                  name="bio"
                  value={dbUser?.bio || ""}
                  onChange={(e) =>
                    setDbUser({ ...dbUser, bio: e.target.value })
                  }
                  className="block w-full px-5 py-3 mt-2 border rounded-lg"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex mt-5 items-center justify-center w-full px-6 py-3 text-sm tracking-wide text-white bg-blue-500 rounded-lg hover:bg-blue-400"
              >
                Save Changes
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
