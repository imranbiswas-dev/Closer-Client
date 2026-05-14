import { useEffect, useState } from "react";
import PostCard from "../Components/CardComponent/PostCard";
const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/post")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  console.log(posts);

  return (
    <div className="flex flex-col gap-5">
      {posts.map((post) => (
        <div key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default Post;
