import React, { use } from 'react';

const Items = ({postCreatedByPromise}) => {
    const posts = use(postCreatedByPromise)
    return (
         <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Location</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
       {
        posts.map((post)=>
             <tr>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={post.thumbnail}
                      alt="Thumbnail"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{post.title}</div>
                  <div className="text-sm opacity-50">{post.category}</div>
                </div>
              </div>
            </td>
            <td>
              {post.description}
            </td>
            <td>{post.location}</td>
            <th className='space-x-2'>
              <button className="btn btn-primary btn-xs">Update</button>
              <button className="btn btn-secondary btn-xs">Delete</button>
            </th>
          </tr>
       )}
        </tbody>
      </table>
    </div>
    );
};

export default Items;