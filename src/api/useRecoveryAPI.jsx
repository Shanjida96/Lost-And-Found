import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useRecoveryAPI = () => {
    const axiosSecure = useAxiosSecure();
    const recoveredByPromise = email => {
        return axiosSecure.get(`/allRecovered?email=${email}`)
        .then(res=>res.data)
    }
    return (
       recoveredByPromise
    );
};

export default useRecoveryAPI;