import React, { Suspense } from 'react';
import Post from './Post';

const Home = () => {
    const postPromise = fetch("http://localhost:3000/items")
                        .then(res=>res.json())
    return (
        <div className='mt-14'>
            <Suspense fallback= {"Loading Latest Post"}>
                <Post postPromise={postPromise}></Post>
            </Suspense>
        </div>
    );
};

export default Home;