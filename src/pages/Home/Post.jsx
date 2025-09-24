import React, { use, useEffect, useState } from "react";
import PostCard from "../../Shared/PostCard";

const Post = ({ postPromise }) => {
  const posts = use(postPromise);
  const [displayPost, setDisplayPost] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayPost(posts);
    } else {
      setDisplayPost(posts.slice(0, 6));
    }
  }, [posts, showAll]);
  return (
    <div>
      <h2 className="text-5xl text-center p-5">Lost And Found Posts</h2>
      <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mx-auto items-center">
        {posts.map((post) => (
          <PostCard key={post._id} post={post}></PostCard>
        ))}
      </div>
      <div className="text-center py-10">
        <button
          className="btn btn-secondary"
          type="submit"
          onClick={() => {
            setShowAll((prev) => !prev);
            if(showAll) window.scrollTo(0,150);
          }}
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default Post;
