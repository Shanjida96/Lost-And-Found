import React from "react";

const AddLostAndFound = () => {
  return (
    <form className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
      <legend className="fieldset-legend">Lost And Found</legend>
      <div>
        <div>
          <label className="label">Post Type</label>
          <select
            defaultValue="Select your post type"
            name="post"
            className="select"
          >
            <option disabled={true}>Select your Post type</option>
            <option>Lost</option>
            <option>Found</option>
          </select>
        </div>
      </div>
      <label className="label">Thumbnail</label>
      <input type="text" className="input" placeholder="Enter the Thumbnail" />
      <label className="label">Title</label>
      <input type="text" className="input" placeholder="Enter the Titlw" />
      <label className="label">Description</label>
      <input
        type="text"
        className="input"
        placeholder="Enter the Description"
      />

      <label className="label">Location</label>
      <input type="text" className="input" placeholder="Description" />
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Category</legend>
          <div className="filter">
            <input
              className="btn filter-reset"
              type="radio"
              name="category"
              value="All"
              aria-label="All"
            />
            <input
              className="btn"
              type="radio"
              name="category"
              value="Gadgets"
              aria-label="Gadgets"
            />
            <input
              className="btn"
              type="radio"
              name="category"
              value="Pets"
              aria-label="Pets"
            />
            <input
              className="btn"
              type="radio"
              name="category"
              value="Money"
              aria-label="Money"
            />
            <input
              className="btn"
              type="radio"
              name="category"
              value="Documents"
              aria-label="Documents"
            />
          </div>
           <label className="label">Contact Information</label>
      <input type="email" className="input" placeholder="" />
        </fieldset>
      <button className="btn btn-neutral mt-4">Add Post</button>
    </form>
  );
};

export default AddLostAndFound;
