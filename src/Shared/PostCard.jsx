import React from "react";

const PostCard = ({ post }) => {
  const {postType,title, thumbnail, description ,category} = post;
  return (
    <div className="card bg-base-100 w-96 shadow-lg">
      <figure>
        <img
          src={thumbnail}
          alt="Thumbnail"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
        {description}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{postType}</div>
          <div className="badge badge-outline">{category}</div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-secondary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
