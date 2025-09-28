import React, { use } from 'react';
import useAuth from '../hooks/useAuth';

const AllRecovered = ({recoveredByPromise}) => {
    const {user} = useAuth();
    const recovereds = use(recoveredByPromise)
    return (
        <div>
            
        </div>
    );
};

export default AllRecovered;