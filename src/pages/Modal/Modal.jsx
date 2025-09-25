import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import Swal from "sweetalert2";

const Modal = ({ post, id }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [recovered, setRecovered] = useState(false);
  const { user } = useAuth();

 useEffect(()=>{
  const retrieved = localStorage.getItem(`recovered-${id}`);
  if(retrieved === "true"){
    setRecovered(true)
  }
 },[id])

  const handleRecovery = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    data.recoveredDate = selectedDate;
    axios.post(`http://localhost:3000/recovered/${id}`, data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "The item is successfully recovered",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
    setRecovered(true);
    localStorage.setItem(`recovered-${id}`,"true")
    document.getElementById("my_modal_3").close();
  };
  return (
    <div>
      <button
        className="btn btn-accent m-5"
        onClick={() => document.getElementById("my_modal_3").showModal()}
        disabled={recovered}
      >
        {post}
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-full max-w-lg rounded-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleRecovery} className="space-y-4">
            <h2 className="text-xl font-bold mb-2">Recover Item</h2>
            <div>
              <label className="block text-sm font-medium mb-1">
                Recovered Location
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                name="recoveredLocation"
                placeholder="Enter the recovered location"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Date Recovered
              </label>
              <DatePicker
                className="input input-bordered w-full"
                name="recoveredDate"
                selected={selectedDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => setSelectedDate(date)}
              />
            </div>
            <div className="border rounded-lg p-3 bg-gray-500">
              <p className="text-sm font-medium mb-2">Recovered By</p>
              <div className="flex items-center gap-3">
                <img
                  src={user?.photoURL || ""}
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col text-sm">
                  <input
                    type="text"
                    className="input input-bordered w-full mb-2"
                    value={user?.displayName || "N/A"}
                    readOnly
                  />
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={user?.email || "N/A"}
                    readOnly
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>

          <p className="py-4 text-sm text-gray-500">
            Press ESC key or click on ✕ button to close
          </p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
