import React from 'react';
import Route from "react-router-dom/Route";
import Redirect from "react-router-dom/Redirect";
import isAdmin from './isAdmin';

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={(props) => {
            if (isAdmin()) {
                return <Component {...props}/>;
            } else {
                return <Redirect to="/"/>;
            }
        }}
    />
);
