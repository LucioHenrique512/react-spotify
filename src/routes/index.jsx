import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthorizeRoute from "./AuthorizeRoute"
 
const Routes = () => {
    return(<Switch>
      <Route exact path="/" component={AuthorizeRoute}/>
    </Switch>)
}

export default Routes;