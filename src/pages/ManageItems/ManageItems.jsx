import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import Items from "./Items";
import usePostAPI from "../../api/usePostAPI";

const ManageItems = () => {
  const {user} = useAuth();
  const {postCreatedByPromise} =usePostAPI();
  return (
    <div className="my-24">
      <Suspense>
        <Items postCreatedByPromise={postCreatedByPromise(user.email)}></Items>
      </Suspense>
    </div>
  );
};

export default ManageItems;
