import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorizeRoute from "./AuthorizeRoute";
import LoginRoute from "./LoginRoute";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <Route exact path="/authorize" component={AuthorizeRoute} />
    </Switch>
  );
};

export default Routes;
