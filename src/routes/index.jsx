import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorizeRoute from "./AuthorizeRoute";
import LoginRoute from "./LoginRoute";
import { PrivateRoute } from "../containers";
import Dashboard from "./DashboardRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginRoute} />
      <Route path="/authorize" component={AuthorizeRoute} />
      <PrivateRoute path="/dashboard" comp={Dashboard} />
    </Switch>
  );
};

export default Routes;
