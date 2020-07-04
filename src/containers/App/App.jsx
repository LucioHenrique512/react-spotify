import React, { useEffect } from "react";

import "./App.scss";
import Routes from "../../routes";

import { useSelector, useDispatch } from "react-redux";
import api from "../../modules/api";
import { useHistory } from "react-router-dom";
import { authActions, userActions } from "../../actions";
import endpoints from "../../modules/endpoints";

const App = () => {
  const { auth, user } = useSelector((state) => state);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyApiError = async () => {
      const { tokenType, accessToken } = auth;
      const authString = `${tokenType} ${accessToken}`;
      const response = await api
        .get(endpoints.getUser, null, authString)
        .then((response) => response);

      if (response) {
        const { error } = response;
        if (error) {
          //console.log(error);
          dispatch(authActions.cleanAuthState());
          dispatch(userActions.cleanUserState());
          history.push("/#error");
        }
      }
    };

    if (user.name !== "" && auth.isLogged) verifyApiError();
  });

  return (
    <div className="app" data-testid="app">
      <Routes />
    </div>
  );
};

export default App;
