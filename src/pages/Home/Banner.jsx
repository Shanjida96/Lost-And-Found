import { use } from "react";

const Banner = ({ postPromise }) => {
  const posts = use(postPromise);
  const updatedPosts = [...posts].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <div className="carousel w-full">
      {updatedPosts.map((post, index) => {
        const prevIndex = (index - 1 + posts.length) % posts.length;
        const nextIndex = (index + 1) % posts.length;
         
        return (
          <div
            key={post._id}
            id={`slide${index}`}
            className="carousel-item relative w-full"
          >
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-120 object-cover"
            />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href={`#slide${prevIndex}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${nextIndex}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Banner;
