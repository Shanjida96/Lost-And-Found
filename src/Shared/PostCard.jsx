import React from "react";
import { Link } from "react-router";

const PostCard = ({ post }) => {
  const {_id,postType,title, thumbnail, description ,category} = post;
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
         <Link to={`/items/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
