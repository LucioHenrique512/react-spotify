import React, { useEffect } from "react";
import api from "../modules/api";
import { useDispatch, useSelector } from "react-redux";
import { contentAction } from "../actions";
import { Switch, useRouteMatch } from "react-router-dom";
import {
  PrivateRoute,
  Categories,
  Dashboard,
  Topbar,
  Tracks,
} from "../containers";
import endpoints from "../modules/endpoints";
import { WelcomeBox } from "../components";
import PlaylistRoute from "./PlaylistRoute";

const DashboardRoute = () => {
  const dispatch = useDispatch();
  const { path, url } = useRouteMatch();

  const {
    content: { categories },
    auth: { accessToken, tokenType },
    user,
  } = useSelector((state) => state);

  useEffect(() => {
    api
      .get(endpoints.getCategories, null, `${tokenType} ${accessToken}`)
      .then((response) => {
        if (response) {
          const { categories } = response;
          if (categories) {
            dispatch(contentAction.updateCategoriesArray(categories.items));
          }
        }
      });
  }, [dispatch, accessToken, tokenType]);

  const isLoading = categories.length === 0;

  return (
    <Dashboard>
      <Topbar />

      <Switch>
        <PrivateRoute exact path={`${path}`}>
          <WelcomeBox name={user.name} />
          <Categories data={categories} isLoading={isLoading} url={url} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryid`}>
          <PlaylistRoute path={path} />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
};

export default DashboardRoute;
