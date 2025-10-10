import axios from 'axios';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';

const UpdateItems = () => {
  const {user} = useAuth()
  const {id} = useParams();
  console.log(id)
   const [selectedDate, setSelectedDate] = useState(new Date());
    const handleUpdate = (e) =>{
      e.preventDefault();
       const form = e.target;
       const formData = new FormData(form);
       const updatedItem = Object.fromEntries(formData)
       formData.set("date", selectedDate.toISOString());
        axios.patch(`http://localhost:3000/myitems/${id}`,updatedItem)
        .then(res=>{
          if (res.data.modifiedCount) {
            console.log(res)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Updates are saved successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    .catch(error=>console.log(error))
                }
        })
    }
    return (
        <div>
         <form
              onSubmit={e=>handleUpdate(e)}
              className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
            >
              <legend className="fieldset-legend">Update Information</legend>
              <div>
                <div>
                  <label className="label">Post Type</label>
                  <select
                    defaultValue="Select your post type"
                    name="postType"
                    className="select"
                  >
                    <option disabled={true}>Select your Post type</option>
                    <option>Lost</option>
                    <option>Found</option>
                  </select>
                </div>
              </div>
              <label className="label">Thumbnail</label>
              <input
                type="text"
                className="input"
                name="thumbnail"
                placeholder="Enter the Thumbnail"
              />
              <label className="label">Title</label>
              <input
                type="text"
                className="input"
                name="title"
                placeholder="Enter the Title"
              />
              <label className="label">Description</label>
              <input
                type="text"
                className="input"
                name="description"
                placeholder="Enter the Description"
              />
        
              <label className="label">Location</label>
              <input
                type="text"
                className="input"
                name="location"
                placeholder="Location"
              />
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
                <DatePicker
                  name="Date"
                  closeOnScroll={true}
                  selected={selectedDate}
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => setSelectedDate(date)}
                />
                <label className="label">Contact Information</label>
                <input
                  type="email"
                  className="input"
                  defaultValue={user?.email}
                  name="contact"
                  placeholder="Enter Your Contact Information"
                  readOnly
                />
              </fieldset>
              <button className="btn btn-neutral mt-4">Update Info</button>
            </form>
        </div>
    );
};

export default UpdateItems;