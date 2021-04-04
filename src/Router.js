import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

// Write ProtectedRoute function here
const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      path="/"
      render={() => (checkAuth() ? <Component /> : <Redirect to="/login" />)}
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <ProtectedRoute path="/" exact component={Dashboard} />
    </Switch>
  );
};

export default Router;
