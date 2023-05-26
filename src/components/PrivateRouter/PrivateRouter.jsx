import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Loading from '../Loading/Loading';


const PrivateRouter = ({ children }) => {
    const { loading, user } = useAuth()
    const location = useLocation();
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }}  />;
};

export default PrivateRouter;