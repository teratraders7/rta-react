
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { loginPath } from '../services/PathUrls';
import { ContextDatas } from '../services/Context';


function PrivateRoute({ children, allowedRoles }) {
    const { user,setUrl } = useContext(ContextDatas);

    if (user === null || user === false) {
        return <Navigate to={loginPath} />;
    }
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/access-denied" />;
    }
    return children;
}

export default PrivateRoute;
