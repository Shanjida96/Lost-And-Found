import React, { use } from "react";
import AllRecoveredRow from "./AllRecoveredRow";

const AllRecoveredList = ({ myRecoveredPromise }) => {
  const recovereds = use(myRecoveredPromise);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {recovereds.map((recovered, index) => {
             <div>
             <tr>
            <th>{index + 1}</th>
            <td>{recovered.title}</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>
        </div>
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllRecoveredList;
