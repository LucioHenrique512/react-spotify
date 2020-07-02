import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorizeRoute from "./AuthorizeRoute";
import LoginRoute from "./LoginRoute";
import PrivateRoute from "../containers/PrivateRoute";
import Dashboard from "./DashboardRoute"

const Routes = () => {
 

  return (
    <Switch>
      <PrivateRoute exact path="/" comp={Dashboard} />
      <Route path="/login" component={LoginRoute} />
      <Route path="/authorize" component={AuthorizeRoute} />
    </Switch>
  );
};

export default Routes;
