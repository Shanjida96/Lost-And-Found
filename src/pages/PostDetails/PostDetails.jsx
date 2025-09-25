import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import DatePicker from "react-datepicker";
import Modal from "../Modal/Modal";

const PostDetails = () => {
  const {
    id,
    date,
    thumbnail,
    title,
    postType,
    description,
    contact,
    category,
  } = useLoaderData();
  const postedDate = date.split("T");
  // console.log(Date[0])
  const [post, setPost] = useState("");
  useEffect(() => {
    if (postType === "Lost") {
      setPost("Found This!");
    } else if (postType === "Found") {
      setPost("This is Mine!");
    }
  }, [postType]);

  return (
    <div>
      <ul className="list bg-base-100 rounded-box shadow-md items-center">
        <li className="p-4 pb-2 text-3xl opacity-60 tracking-wide">
          Post Details
        </li>
        <li className="list-row">
          <div>
            <img className="size-50 rounded-box" src={thumbnail} />
          </div>
          <div>
            <div className="text-xl">{title}</div>
            <div className="text-lg uppercase font-semibold opacity-60">
              {postType}
            </div>
            <div className="text-md uppercase font-semibold opacity-60">
              Contact: {contact}
            </div>
            <p className="list-col-wrap font-bold text-md">
              Category: {category}
            </p>
            <p className="list-col-wrap font-bold text-md">{description}</p>
            <p className="list-col-wrap font-bold text-md">
              Posted On: {postedDate[0]}
            </p>
          </div>
        </li>
       <Modal post={post} id={id} ></Modal>
      </ul>
    </div>
  );
};

export default PostDetails;
