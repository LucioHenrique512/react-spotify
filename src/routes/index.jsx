import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorizeRoute from "./AuthorizeRoute";
import LoginRoute from "./LoginRoute";
import PrivateRoute from "../containers/PrivateRoute";

const Routes = () => {
  const DashBoard = () => <h1>Olá, Mundo spotify</h1>;

  return (
    <Switch>
      <PrivateRoute exact path="/" comp={DashBoard} />
      <Route path="/login" component={LoginRoute} />
      <Route path="/authorize" component={AuthorizeRoute} />
    </Switch>
  );
};

export default Routes;
