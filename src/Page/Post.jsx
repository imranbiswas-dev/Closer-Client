import { useEffect, useState } from "react";
import PostCard from "../Components/CardComponent/PostCard";

const Post = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  return (
    <div className="flex  flex-col gap-5">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Post;
