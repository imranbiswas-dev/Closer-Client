import LeftAside from "../Components/Aside/LeftAside";
import RightAside from "../Components/Aside/RightAside";
import PostBar from "../Components/Header/PostBar";
import Post from "./Post";

const Home = () => {
  return (
    <div className="lg:grid grid-cols-12  gap-5  min-h-screen">
      {/* Left Aside */}
      <section className="col-span-3 hidden lg:block sticky top-20 h-screen overflow-y-auto">
        <LeftAside />
      </section>

      {/* Main Contain */}
      <section className="col-span-6 lg:mt-5 rounded-xl max-w-170 mx-auto">
        <PostBar />
        <Post />
      </section>

      {/* Right Aside */}
      <section className="col-span-3 hidden lg:block ml-19 sticky top-20 h-screen overflow-y-auto ">
        <RightAside />
      </section>
    </div>
  );
};

export default Home;
