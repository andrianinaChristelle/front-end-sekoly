import React from "react";
import Auth from "../contexts/Auth";
import { useContext } from "react";
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const AuthenticatedRoute = ({ path, component }) => {
    const { isAuthenticated } = useContext(Auth);
    console.log(component);
    return isAuthenticated ? (

        <Route exact path={path} component={component} ></Route>
    ) : (
        <Redirect to='/login' />
    )
}
export default AuthenticatedRoute;