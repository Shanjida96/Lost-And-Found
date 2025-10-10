import React, { use } from "react";

const AllRecovered = ({ recoveredByPromise }) => {
  // `recoveredPromise` should be a Promise that resolves to your recovered items array
  const recoveredItems = use(recoveredByPromise);

  // sort newest first by recoveredDate
  recoveredItems.sort(
    (a, b) => new Date(b.recoveredDate) - new Date(a.recoveredDate)
  );

  return (
    <div>
      <h3 className="text-3xl">
        Recovered Items: {recoveredItems.length}
      </h3>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Location</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {recoveredItems.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.recoveredLocation}</td>
                <td>{new Date(item.recoveredDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRecovered;
