import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [newUser,setNewUser] = useContext(UserContext);
    const [user,setUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && newUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;