import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, status, isLoading } = useAuth();

    if (isLoading) {
        return (
            <button className="btn btn-main" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && status ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/dashboard",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;