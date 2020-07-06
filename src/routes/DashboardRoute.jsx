import React, { useEffect } from "react";
import api from "../modules/api";
import { useDispatch, useSelector } from "react-redux";
import { contentAction } from "../actions";
import { Switch, useRouteMatch } from "react-router-dom";
import { PrivateRoute, Categories, Dashboard, Topbar } from "../containers";
import endpoints from "../modules/endpoints";

import PlaylistsRoute from "./PlaylistsRoute";
import TracksRoute from "./TracksRoute";

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

  const CategoriesComponent = () => (
    <Categories data={categories} user={user} isLoading={isLoading} url={url} />
  );

  return (
    <Dashboard>
      <Topbar />

      <Switch>
        <PrivateRoute exact path={`${path}`} comp={CategoriesComponent} />

        <PrivateRoute exact path={`${path}/:categoryid`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryid/:playlistid`}>
          <TracksRoute path={path} />
        </PrivateRoute>
      </Switch>
    </Dashboard>
  );
};

export default DashboardRoute;
