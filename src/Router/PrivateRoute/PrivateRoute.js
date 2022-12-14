import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation()

    if (loader) {
        return (
            <div className='min-h-[70vh] flex justify-center items-center'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;