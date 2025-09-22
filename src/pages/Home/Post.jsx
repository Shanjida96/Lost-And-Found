import React, { use } from 'react';
import PostCard from '../../Shared/PostCard';

const Post = ({postPromise}) => {
    const posts = use(postPromise);
    return (
        <div>
            <h2 className="text-5xl text-center p-5">Lost And Found Posts</h2>
            <div className="gap-4 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 mx-auto items-center">
              {
                posts.map(post =><PostCard key={post._id} post={post}></PostCard>)
              }
            </div>
        </div>
    );
};

export default Post;