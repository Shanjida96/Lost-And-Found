import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const usePostAPI = () => {
   const axiosSecure = useAxiosSecure();
   const postCreatedByPromise = email => {
    return axiosSecure.get(`/items?email=${email}`)
    .then(res=>res.data)
   }
   return {
    postCreatedByPromise
   }
};

export default usePostAPI;